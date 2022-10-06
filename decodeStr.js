// kind of works, doesn't account for when the base ends though. I'm sure there's some built
// in means of doing this easier/I could account for the issue with doubling the length of 'base'
// and breaking the nested loop as soon as it hits the first instance

// nevermind on that last point, I did that and it worked lol

function decode(str) {
    const base = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
    let ans = []
    let str2 = str.split("")
    const num = +str2.shift()

    for(i = 0; i < str2.length; i++) {
        for(x = 0; x < base.length; x++) {
            if(str2[i] === base[x]) {
                ans.push(base[x + num])
                break
            }
        }
    }

    return ans
}

console.log(decode("1abcdez"))