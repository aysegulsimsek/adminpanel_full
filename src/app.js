const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item => {
    const li = item.parentElement;

    item.addEventListener('click', function() {
        allSideMenu.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});

//Toggle Sıdebar

const menuBar = document.querySelector('#content nav .nv__link');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function() {
    sidebar.classList.toggle('hide');
});
if (window.innerWidth < 768) {
    sidebar.classList.add('hide');
} else {
    sidebar.classList.remove('hide');
};
//ri-ghost-smile-line
const searchBtn = document.querySelector('#content nav form .form-input button');
const searchForm = document.querySelector('#content nav form');
const searchBtnIcon = document.querySelector('#content nav form .form-input button .ri-search-2-line');

searchBtn.addEventListener('click', function(e) {
    if (window.innerWidth < 768) {
        e.preventDefault();
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
            searchBtnIcon.classList.replace('ri-search-2-line', 'ri-bear-smile-fill');

        } else {
            searchBtnIcon.classList.replace('ri-bear-smile-fill', 'ri-search-2-line');
        }
    }
})

//change the name 


var nameElement = document.querySelectorAll('.name');
document.addEventListener('DOMContentLoaded', function() {
    // 'name' sınıfına sahip olan ilk öğeyi seçiyoruz
    var nameElement = document.querySelectorAll('.name');

    // Yeni ismi belirliyoruz
    var newName = 'Michelle Field';

    // 'textContent' özelliğini kullanarak içeriği değiştiriyoruz
    nameElement.forEach(function(nameElement) {
        nameElement.textContent = newName;
    });

});

//dashboard mouse event

const logOut = document.querySelector('.logout');
logOut.addEventListener('click', function() {
    alert('Çıkış yapmak istediğinize emin misiniz?');
    window.location.href = '/src/login-page/index.html';
});

// todo list
let addBtn = document.querySelector('.addBtn');
let myInput = document.getElementById('myInput');

addBtn.addEventListener('click', function() {
        myInput.classList.remove('hidden');
    })
    // edit the to do list item,
const editBtn = document.querySelectorAll('.ri-edit-circle-fill');
const editSections = document.querySelectorAll('.edit_section');

editBtn.forEach(function(editBtn, index) {
    editBtn.addEventListener('click', function(e) {
        const editSection = editSections[index];
        editSection.classList.remove('hidden');
    })

})

//remove li
const removeItems = document.querySelectorAll('.remove_item');
removeItems.forEach(function(item) {
    item.addEventListener('click', function() {
        const li = item.parentElement.parentElement;
        alert('silmek istediğinize emin misiniz?');
        li.remove();
    });

});

//edit note
const editNote = document.querySelectorAll('.edit_note');
editNote.forEach(function(item) {
    item.addEventListener('click', function() {
        const p = item.parentElement.parentElement.querySelector("p");
        const newContent = prompt("Enter new content:"); // Kullanıcıdan yeni içeriği al
        if (newContent !== null) { // Eğer kullanıcı "cancel" butonuna tıklamazsa
            p.textContent = newContent; // Yeni içeriği <p> öğesine atar
            // edit_section'ı gizle
            const editSection = item.closest("li").querySelector('.edit_section');
            if (editSection) {
                editSection.classList.add('hidden');
            } else {
                console.error("An error occurred: .edit_section element not found.");
            }
        }

    });

});





//create new element
function newElement() {
    let li = document.createElement("li");
    let p = document.createElement("p");
    let inputValue = document.querySelector("#myInput input").value;
    let t = document.createTextNode(inputValue);
    // Giriş alanını temizleme
    document.querySelector("#myInput input").value = "";
    p.appendChild(t);
    li.appendChild(p);
    if (!inputValue || !inputValue.trim()) {
        alert("Bir metin girmelisiniz!");
        return;
    }

    // removeIcon.textContent = ""; // Silme düğmesini oluştur    
    // let i = document.createElement("i");
    // i.classList.add('ri-edit-circle-fill', 'cursor-pointer', 'hover:text-red');
    // span.appendChild(i); // Kapatma simgesini span öğesine ekle 
    // Edit simgesi oluşturma
    let editIcon = document.createElement("i");
    editIcon.classList.add('ri-edit-circle-fill', 'cursor-pointer', 'hover:text-red', 'relative');
    editIcon.addEventListener('click', function() {
        editSection.classList.remove('hidden');
    });
    li.appendChild(editIcon);
    //edit section create   
    let editSection = document.createElement("div");
    editSection.classList.add('edit_section', 'hidden', 'absolute', 'text-sm', 'right-[60px]', 'font-light', 'bg-light', 'p-1', 'rounded', 'border');


    //child div * 2     
    let editNote = document.createElement("div");
    editNote.classList.add('cursor-pointer', 'hover:bg-lightYellow', 'edit_note');
    editNote.textContent = 'Edit Note';
    editNote.addEventListener('click', function() {
        const p = li.querySelector("p");
        const newContent = prompt("Enter new content:");
        if (newContent !== null) {
            p.textContent = newContent;
            const editSection = li.querySelector('.edit_section');
            if (editSection) {
                editSection.classList.add('hidden');
            }
        }
    })

    let removeItem = document.createElement("div");
    removeItem.classList.add('remove_item', 'cursor-pointer', 'hover:bg-lightYellow', 'flex', 'items-center');
    removeItem.innerHTML = 'Remove <i class="ri-close-line text-base"></i>';
    removeItem.addEventListener('click', function() {
        alert('Silmek istediğinize emin misiniz?');
        li.remove();

    });
    editSection.appendChild(editNote);
    editSection.appendChild(removeItem);
    li.appendChild(editSection);
    // Yeni öğeyi listeye ekleme
    let todoList = document.getElementById("myUL");
    todoList.appendChild(li);

}