

const solutionsBoxes = document.querySelectorAll('.solutions-box');

solutionsBoxes.forEach(box => {
    box.addEventListener('mouse-enter', () => {
        solutionsBoxes.forEach(otherBox => {
        if (otherBox !== box) {
                    otherBox.classList.remove('expanded');
                    }
                }
            );
        box.classList.add('expanded');
        }
    );

    box.addEventListener('mouse-leave', () => {
        box.classList.remove('expanded');
        });
    }
);
