import { getXthCharacter, lengthOfUserName, addWelcomeMessage, cropName, hasToPrintSpecialMessageForMarta, hasToPrintSpecialMessageForJonesSurname, fixMisspelledName } from "./01_strings"

describe('01 strings', () => {
    test('get the length of an user name', () => {
        const result = lengthOfUserName("Richard Peterson")
        const result2 = lengthOfUserName("Clara Hugger")

        expect(result).toBe(16)
        expect(result2).toBe(12)
    })

    test('trim name longer than 10 characters adding ellipsis at the end', () => {
        const result = lengthOfUserName("Alex Pete")
        const result2 = lengthOfUserName("Mint Ruffian")

        expect(result).toBe("Alex Pete")
        expect(result2).toBe("Marcelo Ru...")
    })

    test('get the Xth character of a login', () => {
        const result = getXthCharacter("dogWilson01", 5)
        const result2 = getXthCharacter("martinCastro77", 4)

        expect(result).toBe("i")
        expect(result2).toBe("t")
    })

    test('add welcome message to the user', () => {
        const result = addWelcomeMessage("Jessica", "Good morning")
        const result2 = addWelcomeMessage("Karen", "Welcome")

        expect(result).toBe("Good morning Jessica")
        expect(result2).toBe("Welcome Karen")
    })

    test('get a slice of the user name', () => {
        const result = cropName("Michel Miraflores Castro", 7, 10)
        const result2 = cropName("Samantha Oliver Siemens", 9, 6)

        expect(result).toBe("Miraflores")
        expect(result2).toBe("Oliver")
    })

    test('print special message if user has the first name "Marta"', () => {
        const result = hasToPrintSpecialMessageForMarta("Simon Marta")
        const result2 = hasToPrintSpecialMessageForMarta("Marta Klein")

        expect(result).toBe(false)
        expect(result2).toBe(true)
    })

    test('print special message if user contains the surname Jones', () => {
        const result = hasToPrintSpecialMessageForJonesSurname("Kevin Jones Salvador")
        const result2 = hasToPrintSpecialMessageForJonesSurname("Jones Step")

        expect(result).toBe(true)
        expect(result2).toBe(false)
    })

    test('replace misspelled name', () => {
        const result = fixMisspelledName("Patrick Preist", "Preist", "Priest")
        const result2 = fixMisspelledName("Amanda Slvia", "Slvia", "Salvia")

        expect(result).toBe("Patrick Priest")
        expect(result2).toBe("Amanda Salvia")
    })
})