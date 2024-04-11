

const ScoreSchema=new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    score:{type:Number},


},{timestamps:{createdAt:'created_at',modifiedAt:'modified_at'}}
)

module.exports=mongoose.model('score',ScoreSchema);