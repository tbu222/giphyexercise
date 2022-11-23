const $gif = $("#gif");
const $search = $("#search");

function draw(list) {
    let count = list.data.length;
    if (count)  {
        let rand = Math.floor(Math.random()* count);
        let $col = $("<div>", { class: "col-md-5 mb-5"});
        let $pic = $("<img>", { src:list.data[rand].images.original.url, class: "w-100"});
        $col.append($pic);
        $gif.append($col);
    }
}

$("form").on("submit", async function(event) {
    event.preventDefault();
    let input = $search.val();
    $search.val("");

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: input,
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    });
    draw(response.data);
});

$('#remove').on("click", function(){
    $gif.empty();
});