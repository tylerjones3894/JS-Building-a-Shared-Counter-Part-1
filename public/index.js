async function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');

    // let countValue = 0;

    const getStartingValue = async () => {
        let res = await fetch('http://192.168.1.58:9000/counter');
        let resObject = await res.json();
        return resObject.value;
    }

    let countValue = await getStartingValue()

    function increment(){
        countValue++;
        countContainer.textContent = countValue;
    }

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    countContainer.textContent = countValue;
}
main()