import { annexUsers, hasCharacterInTheList, hasUser, includeUser, printUserNameLength, removeUsersFromTheList } from "./02_arrays"

describe('02 arrays', () => {
    test('include user in the list', () => {
        const userList = ["Marco", "Natalie"]
        const result = includeUser(userList, "Diego")

        expect(userList.length).toBe(2)
        expect(result.length).toBe(3)
        expect(result.includes('Diego')).toBeTruthy();
    })

    test("create a list with only users with specific", () => {
        const result = printUserNameLength(["Miriam", "Jones", "Ken", "Nancy"])

        expect(result).toEqual([6, 5, 3, 5])
    })

    test('check if the user list contain specific character', () => {
        const result = hasCharacterInTheList(["Miriam", "Jones", "Ken"], "U")
        const result2 = hasCharacterInTheList(["Simon", "Richard", "Phillip"], "A")

        expect(result).toBe(false)
        expect(result2).toBe(true)
    })

    test("annex user names into a single text separated by comma", () => {
        const result = annexUsers(["Miriam", "Jones", "Ken", "Nancy"])

        expect(result).toEqual('Miriam,Jones,Ken,Nancy')
    })

    test("check if user list has a specific name", () => {
        const result = hasUser(["Miriam", "Jones", "Ken", "Nancy"], "Ken")
        const result2 = hasUser(["Miriam", "Jones", "Ken", "Nancy"], "Patrick")

        expect(result).toEqual(true)
        expect(result2).toEqual(true)
    })

    test("create a new list without specific users", () => {
        const firstList = ["Miriam", "Jones", "Ken", "Nancy"]
        const secondList = ["Peter", "Alex"]

        const result = removeUsersFromTheList(firstList, ["Jones", "Ken"])
        const result2 = removeUsersFromTheList(secondList, ["Peter"])

        expect(result.length).toEqual(2)
        expect(result2.length).toBe(1)
        expect(firstList.length).toEqual(["Miriam", "Jones", "Ken", "Nancy"])
        expect(secondList.length).toEqual(["Peter", "Alex"])
    })


})