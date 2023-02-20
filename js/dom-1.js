document.getElementById('apply-bg').addEventListener('click', function(){
    const friends= document.getElementsByClassName('friend');
    // console.log(friends);
    for(const friend of friends){
        // console.log(friend)
        friend.style.backgroundColor= 'lightblue'
    }
})

/*-------------- Center The Third button working ------------------*/ 
document.getElementById('center-third').addEventListener('click', function(){
    const puttingCenter= document.getElementById('third-friend');
    puttingCenter.style.textAlign= 'center'
})

/*------------------ if you want to add new variable ------------------------*/ 
// step-1: where wants to add
document.getElementById('add-friend').addEventListener('click', function(){
    // step-2: whose want to add 
    const friendsContainer= document.getElementById('friends-container');
    // step-3 : crearte and where want to add
    const crearteNewFriend= document.createElement('div');
    /*-----------Step-5:  Getting background like previous div----------*/ 
    crearteNewFriend.classList.add('friend')
    /*-----------Step-5:  Getting background like previous div----------*/ 
crearteNewFriend.innerHTML = `
<h3 class="friend-name">Adding New Friend</h3>
<p> Some thing is done, going to Explain later No worry about that </p>
`
// step-4: appainChild (friendsContainer)
friendsContainer.appendChild(crearteNewFriend);

})