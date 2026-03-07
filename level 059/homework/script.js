const name = document.getElementById('name')
class Playlist{
    constructor(){
        this.songs = []
    }
    addSong(song){
        this.songs.push(song)
    }
    deleteSong(song){
        for (let i = 0;i< this.songs.length;i++){
            if(song[i] == song ){
                for (let n = 0;n<this.songs.length - 1;i++){
                    this.songs[n] = this.songs[n+1]
                }
                this.songs.length--
                break;
            }
        }
    }
    showSong(){
        return this.songs.join(', ')
    }
}

const myPlaylist = new Playlist
myPlaylist.addSong('mukhambazi')
myPlaylist.addSong('We are the people')
myPlaylist.deleteSong('Mukhambazi')

console.log(myPlaylist.showSong())


// spread operator ნიშნავს გაშლის ოპერატორს ის იღებს მასივს ან ობიექტს და მას ცალკეულ ელემენტებად შლის
// rest operator ნიშნავს დანარჩენს ის აგროვებს რამდენიმე ელემენტს ერთ მასივში
// spread
// example 1
const numbers1 = [1,2,3,4,5]
const numbers2 = [6,7,8,9]
const numbers = [...numbers1,...numbers2]
console.log(numbers)
console.log([0,...numbers1,6])

// example 2
const fullName = {name:'Salome',surname:'Giorgadze'}
const address = {city:'Tbilisi',country:'Georgia'}

const fullInfo = {...fullName,...address}
console.log(fullInfo)
// rest
// example 1
function me(firstname,lastname,...hobbies){
    console.log(`Hello my name is ${firstname} ${lastname}`)
    console.log(`My hobbies: ${hobbies.join(', ')}`)
}
me('Salome','Giorgadze','Dance','Coding','Math','Walking')

// example 2
let nums = [1,2,3,4,5,6,7]
let [first,second,...rest] = nums
console.log(first,second,rest)




// const add = document.getElementById('add')
// const newSong = document.getElementById('name')
// const btn = document.getElementById('btn')
// const playlist = document.getElementById('playlist')

// add.addEventListener('submit',(e)=> {
//     e.preventDefault(e);
//     const name = e.target.name.value
//     const li = document.createElement('li')
//     li.textContent = name;
//     playlist.appendChild(li)
//     e.target.reset()
// })