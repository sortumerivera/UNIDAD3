function generateUrl() {
    let id = Math.round(Math.random() * 500) + 1;
    return `https://picsum.photos/id/${id}/info`;
  }

function getPicture() {
    $.ajax({
        type: "GET",
        url: generateUrl(),
        dataType: "json",
        async: true,
        success: function (data) {
          renderPicture(data);
        },
      });
}

function renderPicture(data) {
   console.log(data);
   console.log(data.author);

   let div = $("<div></div>"). addClass("card");

   let img = $("<img />").attr("src",data.download_url).addClass("card-img");
   div.append(img);

   let autor = $(`<h3>${data.author}</h3>`).addClass("card-title");
   div.append(autor);

   $("#pictures-container").append(div);
}

$(document).ready(function () {
   for (let i = 0; i < 10; i++) {
    getPicture();
   }
});