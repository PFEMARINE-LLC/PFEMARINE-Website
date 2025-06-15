

const solutionsBoxes = document.querySelectorAll('.solutions-box');

solutionsBoxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        solutionsBoxes.forEach(otherBox => {
        if (otherBox !== box) {
                    otherBox.classList.remove('expanded');
                    }
                });
        box.classList.add('expanded');
        });

    box.addEventListener('mouseleave', () => {
        box.classList.remove('expanded');
        });
    }
);
