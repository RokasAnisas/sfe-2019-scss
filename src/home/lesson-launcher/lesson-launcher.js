const lessonLauncher = () => {
    window.onhashchange = function () {
        setActiveLesson()
    }

    const setActiveLesson = () => {
        const currentLesson = location.hash.replace('#/lesson-', "")
        const allLessonViews = document.getElementsByClassName('app-lesson-launcher__content')
        const activeLesson = document.getElementById(`lesson-view-${currentLesson}`)

        Array.prototype.forEach.call(allLessonViews, function(lessonView) {
            lessonView.classList.add('-closed')
        });

        if (activeLesson) {
            activeLesson.classList.remove('-closed')
        }
    }

    setActiveLesson()
}

lessonLauncher();