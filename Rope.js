class Rope
{
   constructor(a,b)
   {
    var options = 
    {
       bodyA:a,
       pointB:b,
       stiffness:0.04,
       length:1
    }
  
    this.chain = Constraint.create(options);
    World.add(world,this.chain);
   }
  
}