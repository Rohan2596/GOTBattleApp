class BattleController{

  getBattleList=(req,res,next)=>{
      try {
          const response={}
          response.success=true;
          response.message="Get All Battle List.";
          response.data=[];
          response.error=""
          return res.status(200).send(response);
          
      } catch (error) {
        next(error)
      }
  };
  getBattleCount=(req,res,next)=>{
    try {
        const response={}
        response.success=true;
        response.message="Get Total Battle Count.";
        response.data=[];
        response.error=""
        return res.status(200).send(response);
        
    } catch (error) {
      next(error)
    }
};
search=(req,res,next)=>{
    try {
        const response={}
        response.success=true;
        response.message="Searching battle and amy more";
        response.data=req.query;
        response.error=""
        return res.status(200).send(response);
        
    } catch (error) {
      next(error)
    }
};

  

};
module.exports=new BattleController();