const forms = [...document.querySelectorAll('form')]

function handleSubmit(e) {
  e.preventDefault()

  const form = e.currentTarget
  const { type } = form.dataset

  const textarea = form.querySelector('textarea')
  const input = form.querySelector('input')

  if (type === 'html-to-string') {
    input.value = JSON.stringify(textarea.value)
  } else {
    textarea.value = JSON.parse(input.value)
  }
}

forms.forEach(form => form.addEventListener('submit', handleSubmit))
