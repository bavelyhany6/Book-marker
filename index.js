var websiteContainer=[]
var SiteNameInput=document.getElementById("SiteNameInput")
var SiteUrlInput=document.getElementById("SiteUrlInput")

if(localStorage.getItem('urls') !=null){
    websiteContainer=JSON.parse(localStorage.getItem('urls'))
    displayBookmarks(websiteContainer)
}

 function addBookmark(){
   
    if (validatName() && validatUrl()==true){
    var bookmark={
        name: SiteNameInput.value,
        url: SiteUrlInput.value
    }
    
    websiteContainer.push(bookmark)
    localStorage.setItem('urls', JSON.stringify(websiteContainer))
    displayBookmarks(websiteContainer)
    clearForm()

}
else{
    swal("Somthing Wrong!", "'Write more than 3 letters in Bookmark name' OR 'URL is not Validate'", "error");
}

 }
 function clearForm(){
    SiteNameInput.value= ""
    SiteUrlInput.value= ""

 }
 function displayBookmarks(bookmarkArr){
    var trs=""
    for(var i=0; i<bookmarkArr.length;i++){
        trs+=`
        <tr>
                        <td>${i+1}</td>
                        <td>${bookmarkArr[i].name}</td>
                        <td>
                        <a href="${bookmarkArr[i].url}" target="_blank" class="btn btn-success"><i class="fa-solid fa-eye"></i>  Visit</a>
                    </td>
                        <td>
                            <button onclick="deleteBookmark(${i});" class=" btn btn-danger"><i class="fa-solid fa-trash-can"></i>  Delete</button>
                        </td>
                      
                    </tr>`
       }
       document.getElementById('tBody').innerHTML=trs;
 }
 function deleteBookmark(urlsIndex)
 {
    websiteContainer.splice(urlsIndex,1)
    localStorage.setItem('urls', JSON.stringify(websiteContainer))

    displayBookmarks(websiteContainer)
 }

 function validatName(){
    var regex=/^[a-z]{3,8}$/;
    return regex.test(SiteNameInput.value);
 }
 function validatUrl() {
    // Regular expression to validate URLs
    var urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

    return urlRegex.test(SiteUrlInput.value);
 }
