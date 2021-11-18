
const cardList = document.querySelector('.master-container');


function createElementWithClass(type, className) {
    const element = document.createElement(type);
    element.className = className
    return element;
  } 


async function getContent() {
    
    try {

        // Acess the server and take his content (response)
        const url =   'http://localhost:3000/googlenewsapi'

        fetch(url).then((response)=>{
            return response.json()
        }).then((data)=>{
            console.log(data)

            data.articles.forEach(article => {
                // Create the html elements
                let divCard = createElementWithClass('div', 'card');
                let divCardConatiner = createElementWithClass('div', 'card-container')
                let h4 = document.createElement('h4')
                let p = document.createElement('p')
                let a = document.createElement('a');

                // Put the necessary attributes in the 'a' element.
                a.setAttribute('href', article.url);
                a.setAttribute('target', '_blank');

                // Take the necessary data from the JSON object and place the text of this data in the selected elements ('p' and 'a')
                a.textContent = article.title;
                p.textContent = article.description;

                // Create a structure of DOM elements by creating one element in another
                h4.appendChild(a);
                cardList.appendChild(divCard);
                divCard.appendChild(divCardConatiner);
                divCardConatiner.appendChild(h4);
                divCardConatiner.appendChild(p);
    
            });
        })


    
    } catch (error) {
        console.error(error)
    }

    };


getContent()


