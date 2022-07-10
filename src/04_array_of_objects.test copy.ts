import { getInnerValue, getUserProperties, getUserValue, searchForValue } from "./03_objects"

describe('03 objects', () => {
    test('get the list of user properties', () => {
        const user = {
            name: "Karl",
            age: 23,
            lastAccess: new Date(2012, 1, 20)
        }

        const result = getUserProperties(user)

        expect(result).toEqual(['name', 'age', 'lastAccess'])
    })

    test('read a specific property from user', () => {
        const user = {
            name: "Karl",
            age: "23",
        }

        const result = getUserValue(user, 'name')
        const result2 = getUserValue(user, 'age')

        expect(result).toEqual('Karl')
        expect(result2).toEqual("23")
    })

    test('read a nested property from the user', () => {
        const user = {
            name: "Karl",
            age: "23",
            address: {
                street: "Michigan Av",
                number: "41"
            },
            contact: {
                email: "karl@gmail.com"
            }
        }

        const result = getInnerValue(user, 'address', 'street')
        const result2 = getInnerValue(user, 'contact', 'email')

        expect(result).toEqual("Michigan Av")
        expect(result2).toEqual("karl@gmail.com")
    })

    test('search a property in the user that could be nested', () => {
        const user = {
            name: "Karl",
            age: "23",
            address: {
                street: "Michigan Av",
                number: "41"
            },
            contact: {
                email: "karl@gmail.com"
            }
        }

        const result = searchForValue(user, 'number')
        const result2 = searchForValue(user, 'age')

        expect(result).toEqual("41")
        expect(result2).toEqual("23")
    })
})