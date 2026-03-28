const userList = document.getElementById('users')
const button = document.getElementById ('usersbtn')

async function getUsers() {

  try{
    
    const response = await fetch ('https://jsonplaceholder.typicode.com/users')
    
    if (!response.ok) {
        
      throw Error ('HTTP error! Status: ${response.status}');
      
    }
      
    
    const users = await response.json();
     
    button.addEventListener('click', ()=> {
    userList.textContent = ''
      users.forEach(user => {
      
      const li = document.createElement('li')
      li.innerHTML = `<strong> User</strong> : ${user.name} | <strong> Email</strong> ${user.email}` 
       
      userList.appendChild(li)

      })
  })

      }

    catch (error) {
        console.error ('There was a problem fetching data:' , error)
      }
    }
    userList.textContent = 'Loading...';
    getUsers();

  


  

