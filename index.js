const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

// Sélectionner le conteneur où vous souhaitez afficher les posts
const gridContainer = document.getElementById('grid-container');

// Boucle sur chaque post pour générer le contenu HTML
for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    
    // Créer un élément section pour chaque post
    const postSection = document.createElement('section');
    postSection.classList.add('container');

    // Ajouter le contenu HTML pour chaque post
    postSection.innerHTML = `
        <img class="avatar" src="${post.avatar}">
        <div class="infoblock">
            <h1 class="name">${post.name}</h1>
            <h2 class="location">${post.location}</h2>
        </div>
        <img class="post" src="${post.post}">
        <section class="buttons">
            <button class="likebtn" data-index="${i}">
                <img class="btn" src="/images/icon-heart.png">
            </button>
            <button class="commentbtn">
                <img class="btn" src="/images/icon-comment.png">
            </button>
            <button class="sendbtn">
                <img class="btn" src="/images/icon-dm.png">
            </button>        
        </section>
        <section class="likes">
            <p class="likenum" id="likenum-${i}">${post.likes} likes</p>
            <div class="commentaire">
                <p class="com1">${post.username}</p>
                <p>${post.comment}</p>
            </div>
        </section>
    `;

    // Ajouter la section post à grid-container
    gridContainer.appendChild(postSection);
}

// Gérer le clic sur le bouton "like" pour chaque post
const likeButtons = document.querySelectorAll('.likebtn');

likeButtons.forEach(button => {
    let liked = false; // État de chaque like

    button.addEventListener('click', function () {
        const index = this.getAttribute('data-index');
        const likeNum = document.getElementById(`likenum-${index}`);
        let currentLikes = posts[index].likes;

        if (!liked) {
            currentLikes++;
            liked = true;
        } else {
            currentLikes--;
            liked = false;
        }

        likeNum.textContent = `${currentLikes} likes`;
        posts[index].likes = currentLikes; // Mettre à jour le nombre de likes dans l'array posts
    });
});
