async function  fetchuserData(){
    const apiurl = 'https://jsonplaceholder.typicode.com/users';

    const dataContainer = document.getElementById(api-data);
    try{
        const response = await fetch (apiUrl);
        const user = awat response.json();

        dataContainer.innerHTML = '';

        const userList = document.createElement('ul');

      users forEach = (user => {
        const listItem = document.createElement('li');
        listItem.textContent = user.name;
        user.list.appendChild(listItem);
      });a

      dataContainer = appendChild(userList);

} catch (error){
    dataContainer.innerHTML = '';
    dataContainer.textContent = 'Failed to load user data.';
    }
}
document.addEventListener('DOMContentLoaded', fetchUserData);
