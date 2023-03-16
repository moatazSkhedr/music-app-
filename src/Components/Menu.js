import React , {useEffect} from 'react'
import '../Style/LeftMenu.css'
function Menu({title , menuObject}) {
    useEffect(()=>{
        const allLi = document.querySelector(
            ".MenuContainer ul"
        ).querySelectorAll("li");
        function changeMenuActive(){
            allLi.forEach(n=> n.classList.remove("active"));
            this.classList.add("active")
        }
        allLi.forEach(n => n.addEventListener("click", changeMenuActive))
    console.log(allLi);
    } , [])
  return (
    <div className='MenuContainer'>
        <p className='title'>{title}</p>
        <ul>
            {
                menuObject && menuObject.map((element)=>{
                    return <li key={element.id}>
                        <a href='#'>
                            <i>{element.icon}</i>
                            <span>{element.name}</span>
                        </a>
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default Menu