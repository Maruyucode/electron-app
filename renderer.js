document.addEventListener('DOMContentLoaded', () => {
    console.log('OK')
    document.getElementById('comment-form').onsubmit = () => {
        // alert('OK')
        const commentInput = document.getElementById('comment-input')

        if (commentInput.value === '') {
            return false
        }

        const newComment = document.createElement('li')

        newComment.innerText = commentInput.value
        document.getElementById('comments').appendChild(newComment);

        commentInput.value = ''
        return false
    }
})