// link for api for the pokemon
// onclick function to search for the info
// populate the data
// be able to input the users search into the api
// async await
// prevent the page from refreshing

// document.ready()
$(()=>{
    $('form').on('submit', (event)=>{
        event.preventDefault()
        // set a variable for the user input
        
        const userInput = $('input[type="text"]').val()
        
        
        getPokeData(userInput)
    })
    
    async function getPokeData(input){
        // async await to grab data
        // fetch the data
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
        
        // change the data to JSON data
        const data = await response.json()
        console.log(data)
        
        $('#pokeName').html(data.forms[0].name)
        $('#pokeType').html(data.types[0].type.name)
        $('#pokeNum').html(data.id)

        const type = $('#pokeType').html()

        console.log(type)
        if (type == 'fire'){
            $('body').css('background-color', 'firebrick')
        } else if (type == 'water'){
            $('body').css('background-color', 'mediumturquoise')
        } else if (type == 'grass'){
            $('body').css('background-color', 'green')
        } else if (type == 'normal'){
            $('body').css('background-color', 'whitesmoke')
        } else if (type == 'fighting'){
            $('body').css('background-color', 'burlywood')
        } else if (type == 'psychic'){
            $('body').css('background-color', 'purple')
        } else if (type == 'bug'){
            $('body').css('background-color', 'olive')
        } else if (type == 'flying'){
            $('body').css('background-color', 'khaki')
        } else if (type == 'electric'){
            $('body').css('background-color', 'goldenrod')
        } else if (type == 'ground'){
            $('body').css('background-color', 'chocolate')
        } else if (type == 'dragon'){
            $('body').css('background-color', 'orange')
        }
        else if (type == 'dark'){
            $('body').css('background-color', 'black')
        }
        else if (type == 'ghost'){
            $('body').css('background-color', 'blueviolet')
        }
        else if (type == 'steel'){
            $('body').css('background-color', 'lightsteelblue')
        }
        else if (type == 'fairy'){
            $('body').css('background-color', 'coral')
        }
        else if (type == 'rock'){
            $('body').css('background-color', 'sienna')
        }
        else if (type == 'poison'){
            $('body').css('background-color', 'violet')
        }
    }

})