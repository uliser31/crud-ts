interface Partner {
    id: number;
    name: string;    
}

interface  Partners extends Array<Partner>{};

export default Partners