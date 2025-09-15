let button = document.querySelector("button");
button.onclick = function () {
    try {
        $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        type: "GET",
        dataType: "json",
        success: function(data){
            let text = `User ID : ${data.userId}, ID : ${data.id}, title : ${data.title}, body : ${data.body}`;
            $(".info").html(text);
        }
    })
        
    } catch (error) {
        console.log(error);
    }
}