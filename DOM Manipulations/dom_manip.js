// DOM manipulation(Document object model)
// BOM(Browser object model)
// 1. getElementById
window.addEventListener('load', (event) => {
    // console.log("document");
    // const heading = document.getElementById('heading').innerHTML = "newSkill";
    // console.log(heading);

    // document.getElementById('heading').value = "skill";

    // const heading = document.getElementsByTagName('h1');
    // const heading = document.getElementsByClassName('title');
    // const heading = document.querySelector('.test');
    // const heading = document.querySelector('#heading');
    // const heading = document.querySelector('.test');
    // console.log(heading);

    // const heading = document.querySelector('#heading');
    // const parent = heading.parentNode;
    // console.log(parent);
    // const parent = document.querySelector('#heading');
    // console.log(heading.childNodes);

    // const heading = document.querySelector('#head_1');
    // console.log(heading.nextElementSibling);
    // console.log(heading.previousElementSibling);

    // 3. previousElementSibling
    // const heading = document.querySelector('#head_2');
    // const subHeading = document.querySelector('#head_2');
    // console.log(subHeading.previousElementSibling);    
    // heading.innerHTML = 'Web dev is awesome!';
    // heading.style.color = 'red';
    // heading.style.fontSize = '100px';
    // heading.classList.add('title');
    // console.log(heading)

    // heading.classList.remove('title');

    // const heading = document.querySelector('#head_2');
    // const subHeading = document.createElement('h3');
    // subHeading.innerHTML = 'The Programming Lab';
    // heading.insertAdjacentElement('afterbegin', subHeading);
    // console.log(heading)

    // Create elements
    const heading = document.createElement('h3');
    heading.innerHTML = 'Javascript is awesome!';
    heading.classList.add('title');
    const parent = document.querySelector('#heading');
    parent.appendChild(heading);
    console.log(parent)

});


// Manipulation

// Create elements
// const heading = document.createElement('h1');
// heading.innerHTML = 'Javascript is awesome!';
// heading.classList.add('title');
// const parent = document.querySelector('.parent');
// parent.appendChild(heading);



// console.log(heading);

