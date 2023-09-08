import AOS from 'aos';
var aos = {
    init: (e) => {
        AOS.init({
            delay: 200,
            duration: 800,
        });
    }
}

export { aos };