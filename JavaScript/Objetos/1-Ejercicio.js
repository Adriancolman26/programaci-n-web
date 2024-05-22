function createObject(name, subs) {
    const canal = {
    name: name,
    subscribers: subs,
    hash: name.length * subs,
    getStatus: () => {
        return `El canal de ${name} tiene ${subs} suscriptores`
    },
};
return canal
};

const miCanal = createObject("Adrian", 200);
console.log(miCanal.getStatus());


