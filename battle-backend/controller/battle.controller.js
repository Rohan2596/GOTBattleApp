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
        const response={}
        response.success=false;
        response.message="No Battle Lsit.";
        response.data=[];
        response.error=error
        return res.status(500).send(response);
      }
  }

}
module.exports=new BattleController();