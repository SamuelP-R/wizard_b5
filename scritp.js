document.addEventListener("DOMContentLoaded", function () {
    const toastTrigger = document.getElementById("liveToastBtn");
    const toastElement = document.getElementById("liveToast");
    const toast = new bootstrap.Toast(toastElement);
    const nextBtns = document.querySelectorAll(".next-step");
    const prevBtns = document.querySelectorAll(".prev-step");
    const tabs = document.querySelectorAll(".nav-tabs .nav-link");

    toastTrigger.addEventListener("click", function () {
        toast.show();
    });
    nextBtns.forEach((btn, index) => {
        btn.addEventListener("click", function() {
            tabs[index + 1].click();
        });
    });

    prevBtns.forEach((btn, index) => {
        btn.addEventListener("click", function() {
            tabs[index].click();
        });
    });

});

