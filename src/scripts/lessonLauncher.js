const lessonLauncher = () => {
    const lessonGrid = document.getElementById('app-lesson-grid');
    const lessonView = document.getElementById('app-lesson-view');

    window.onhashchange = function () {
        watchHashChange()
    }

    const watchHashChange = () => {
        const isLessonView = location.hash.includes('/lessons/')

        if (isLessonView) {
            GridViewToggle('view')
        } else {
            GridViewToggle('grid')
        }
    }

    const GridViewToggle = (value) => {
        if (value === 'grid') {
            lessonGrid.classList.add('is-active')
            lessonView.classList.remove('is-active')
        }
        if (value === 'view') {
            lessonGrid.classList.remove('is-active')
            lessonView.classList.add('is-active')
        }
    }

    watchHashChange()
}

export default lessonLauncher;
