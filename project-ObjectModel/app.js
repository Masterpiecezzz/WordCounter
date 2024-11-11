class TextAreaCounter
{
    constructor()
    {
        this.textarea = document.querySelector('div.container textarea');
        this.counter = document.querySelector('div.counter div p');
        this.resetButton = document.querySelector('div.counter div i');
        this.init();
    }

    updateCounter()
    {
        const wordCount = this.textarea.value.trim() === '' ? 0 : this.textarea.value.split(' ').length;
        this.counter.textContent = `Quantity: ${wordCount}`;
    }

    handleReset(event) { if((event.target === this.resetButton || event.target === this.resetButton.parentElement) && this.textarea.value.trim() !== '') { this.resetTextArea(); } }

    resetTextArea()
    {
        this.textarea.value = '';
        this.counter.textContent = 'Quantity: 0';
    }

    init()
    {
        this.textarea.addEventListener('input', () => this.updateCounter());
        document.addEventListener('click', (e) => this.handleReset(e));
    }
}

const textAreaCounter = new TextAreaCounter();