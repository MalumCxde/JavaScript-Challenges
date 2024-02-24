const dataArray = [
    {
        title: 'Why is JavaScript cool?',
        detail: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores corporis sed ipsum alias, cumque veniam unde minus ab libero repellat impedit tempora possimus, corrupti molestiae perferendis beatae repudiandae aperiam nihil.'
    },
    {
        title: 'What is JavaScript?',
        detail: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores corporis sed ipsum alias, cumque veniam unde minus ab libero repellat impedit tempora possimus, corrupti molestiae perferendis beatae repudiandae aperiam nihil.'
    },
    {
        title: 'How can i learn Javascript?',
        detail: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores corporis sed ipsum alias, cumque veniam unde minus ab libero repellat impedit tempora possimus, corrupti molestiae perferendis beatae repudiandae aperiam nihil.'
    },
    {
        title: 'Where can i learn it?',
        detail: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores corporis sed ipsum alias, cumque veniam unde minus ab libero repellat impedit tempora possimus, corrupti molestiae perferendis beatae repudiandae aperiam nihil.'
    }
]

const makeHtml = (data) => {
       return `<details>
        <summary> ${data.title} </summary>
        <p>${data.detail}</p>
        </details> `
}


const containerElement =document.getElementById('faq-container')
containerElement.innerHTML = dataArray.map(dataItem => makeHtml(dataItem)).join('')