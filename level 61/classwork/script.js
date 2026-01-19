const me = new Map([['name','salome'],['age',16],['city','tbilisi']])
console.log(me.size)
for (let pair of me){
    console.log(pair)
}
// set ამატებს ახალ key-value წყვილს Map-ში
me.set('hobby','dance')
console.log(me)

// get აბრუნებს კუთვნილების შესაბამის მნიშვნელობას
console.log(me.get('name'))

console.log(me.entries())

// has ამოწმებს არსებობს თუ არა მოცემული key Map-ში
console.log(me.has('city'))

// delete შლის კონკრეტულ key-value წყვილს
me.delete('city')
console.log(me)

// clear ასუფთავებს მთლიან map ს
me.clear() 
console.log(me)






const nums = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]
const filteredNums = new Set(nums)
console.log(filteredNums)

const languages = new Set (['python','js','java','c++','c#'])
console.log(languages)

// size ამოწმებს რამდენი ელემენტია
console.log(languages.size)

// add ამატებს ელემენტს
languages.add('php')
console.log(languages)

// delete შლის ელემენტს
languages.delete('c#')
console.log(languages)

// has ამოწმებს გვაქვს თუ არა მნიშვნელობა
console.log(languages.has('java'))

// values მნიშვნელობები
for (let language of languages.values()){
    console.log(language)
}

// clear ასუფთავებს მთლიან set ს
languages.clear()
console.log(languages)