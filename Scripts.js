/*const secretMessage = "Hold Your Fire"

let res = ""

const charCodes = []

console.log(secretMessage)

function ceasarEncrypt(msg) {
    for (let i = 0; i < secretMessage.length; i++) {
        charCodes.push(secretMessage[i].charCodeAt(0))

    }

    console.log(charCodes)

    for (let i = 0; i < charCodes.length; i++) {
        charCodes[i] = charCodes[i] + 1

    }

    console.log(charCodes)

    let encryptedMessage = ""
    for (let i = 0; i < charCodes.length; i++) {
        encryptedMessage = encryptedMessage + String.fromCharCode(charCodes[i])

    }
}

console.log(encryptedMessage)

------------------------------------------------------------------------
*/
export function ceasarEncrypt(msg, shift) {
    const charCodes = []
    for (let i = 0; i < msg.length; i++) {
        charCodes.push(msg[i].charCodeAt(0))

    }

    console.log(charCodes)

    for (let i = 0; i < charCodes.length; i++) {
        charCodes[i] = charCodes[i] + shift

    }

    console.log(charCodes)

    let result = ""
    for (let i = 0; i < charCodes.length; i++) {
        result = result + String.fromCharCode(charCodes[i])

    }
    return result
}


export function ceasarDecrypt(msg, shift) {
    const charCodes = []
    for (let i = 0; i < msg.length; i++) {
        charCodes.push(msg[i].charCodeAt(0))

    }

    console.log(charCodes)

    for (let i = 0; i < charCodes.length; i++) {
        charCodes[i] = charCodes[i] - shift

    }

    console.log(charCodes)

    let result = ""
    for (let i = 0; i < charCodes.length; i++) {
        result = result + String.fromCharCode(charCodes[i])

    }
    return result
}





const secretMessage = "plz"
const encryptedMessage = ceasarEncrypt(secretMessage, 5)

console

const decryptedMessage = ceasarDecrypt(encryptedMessage, 5)

console.log(encryptedMessage)
console.log(decryptedMessage)


const name = "ZAKKK"
console.log(name)
console.log(name.length)

const foo = name[1]

console.log(foo)
console.log(foo.length)

console.log(foo.charCodeAt(0))