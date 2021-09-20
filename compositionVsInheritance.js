// INHERITANCE

class Monster{
    constructor( name )
    {
        this.name = name;
    }

    attack()
    {
        console.log(  `${this.name} attacked`);
    }

    walk()
    {
        console.log(  `${this.name} walked`);
    }
}

class FlyingMonster extends Monster{
    
    fly()
    {
        console.log(  `${this.name} flew`); 
    }
}

class SwimmingMonster extends Monster{
    
    swim()
    {
        console.log(  `${this.name} swam`); 
    }
}

const  bear =  new Monster( "bear" );
bear.walk();
bear.attack();

const eagle = new FlyingMonster( "eagle" );
eagle.walk();
eagle.attack();
eagle.fly();

const shark  = new SwimmingMonster( "shark" );
shark.walk();
shark.attack();
shark.swim();

//ok  what if someone asks  to create monster with flying and  swimming monster

//fly and swim are duplicates
class FlyingSwimmingMonster extends Monster{
    fly()
    {
        console.log(  `${this.name} flew`); 
    }
    swim()
    {
        console.log(  `${this.name} swam`); 
    }
}


// COMPOSITION


function swimmer( {name} )
{
    return {
        swim : ()=>console.log( `${name} swam`)
    }
}

function flyer( {name} )
{
    return {
        fly : ()=>console.log( `${name} flew`)
    }
}

function attackerAndWalker( {name} )
{
    return {
        attack : ()=>console.log( `${name} attacked` ),
        walk : ()=>console.log(`${name} walked` )
    }
}

function swimmingMonsterCreator( name )
{
    const monster = {name : name};
    return {
        ...monster,
        ...swimmer( monster ),
        ...attackerAndWalker( monster )
    }
}

function flyingMonsterCreator( name )
{
    const monster = {name : name};
    return {
        ...monster,
        ...flyer( monster ),
        ...attackerAndWalker( monster )
    }
}

function flyingSwimmingMonsterCreator( name )
{
    const monster = {name : name};
    return {
        ...monster,
        ...flyer( monster ),
        ...swimmer( monster ),
        ...attackerAndWalker( monster )
    }
}



const obj =  flyingSwimmingMonsterCreator( "Monster" );
obj.fly();
obj.swim();
obj.attack();
obj.walk();

//:) The  great thing is we can create  any combination of  objects  we want without duplicates. ALso no classes, oops concepts,.. so  powerful

