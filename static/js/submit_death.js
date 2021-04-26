(() => {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const createDeathEntity = formElement => {
        const formData = new FormData(formElement);
        const formEntries = Array.from(formData)
            .reduce((a, x) => {
                a[x[0]] = x[1];
                return a;
            }, {});

        const parsedDate = Array.from(new Intl.DateTimeFormat('en')
            .formatToParts(Date.parse(formEntries.date)))
            .reduce((a, x) => {
                a[x.type] = x.value;
                return a;
            }, {});
        const dateStr = `${parsedDate.day}-${monthNames[parsedDate.month-1]}`;
        
        return deathEntity = {
            'Name': formEntries.name,
            'Location': formEntries.location,
            'Win': formEntries.win,
            'Got Out': formEntries.gotout,
            'Date': dateStr,
            'Weapon Color': formEntries.weaponcolor,
            'Weapon Type': formEntries.weapontype,
            'Weapon Name': formEntries.weaponname,
            'Weapons': `${formEntries.weaponcolor} ${formEntries.weapontype} ${formEntries.weaponname}`,
            'Type of Bow': formEntries.typeofbow
        };
    };

    window.addEventListener('load', () => {
        const buttonElement = document.getElementById('submit-death-button');
        const dateElement = document.getElementById('date');
        const formElement = document.getElementById('submit-death-form');
        const resultElement = document.getElementById('death-form-result');

        const now = new Date();
        const day = ("0" + now.getDate()).slice(-2);
        const month = ("0" + (now.getMonth() + 1)).slice(-2);
        dateElement.value = now.getFullYear()+"-"+(month)+"-"+(day);

        buttonElement.addEventListener('click', _ => {
            resultElement.classList.add('hidden');
            formElement.classList.remove('hidden');
        });

        formElement.addEventListener('submit', e => {
            e.preventDefault();
            e.stopPropagation();
    
            const deathEntity = createDeathEntity(e.target);
    
            fetch('/.netlify/functions/death-data', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(deathEntity)
            }).then(response => response.json())
                .then(data => {
                    const ref = data.ref['@ref'].id;
                    const result = document.createElement('pre');
                    deathEntity.id = ref;
                    result.innerHTML = JSON.stringify(deathEntity, null, 2);
                    resultElement.innerHTML = '';
                    resultElement.appendChild(result);
                    formElement.classList.add('hidden');
                    resultElement.classList.remove('hidden');
                });
        });
    });
})();
