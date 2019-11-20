// DO NOT USE THIS AS AN EXAMPLE
// Oh well, do whatever, I'm just a comment
const lessonLauncher = () => {
    const lessonGrid = document.getElementById('app-lesson-grid');
    const lessonView = document.getElementById('app-lesson-view');

    window.onhashchange = function () {
        watchHashChange()
    }

    const watchHashChange = () => {
        const currentLesson = location.hash.replace('#/lessons/', "")
        const isLessonView = location.hash.includes('/lessons/')

        if (isLessonView) {
            GridViewToggle('view')
            setActiveLesson(currentLesson)
            setLessonTitle(currentLesson)
        } else {
            GridViewToggle('grid')
            setLessonTitle()
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

    const setActiveLesson = (currentLesson) => {
        const allLessonViews = document.getElementsByClassName('app-lesson-view__lesson')
        const activeLesson = document.getElementById(currentLesson)

        Array.prototype.forEach.call(allLessonViews, function (lessonView) {
            lessonView.classList.remove('is-active')
            activeLesson.classList.add('is-active')
        });
    }

    const setLessonTitle = (name) => {
        const lessonTitleElement = document.getElementById('app-lesson-name')
        if (name) {
            lessonTitleElement.innerText = name.replace('-', ' ')
            lessonTitleElement.classList.add('is-active')
        } else {
            lessonTitleElement.innerText = null
            lessonTitleElement.classList.remove('is-active')
        }
    }

    watchHashChange()
}

export default lessonLauncher;
