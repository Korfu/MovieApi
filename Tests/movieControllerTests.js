var should = require('should'),
    sinon = require('sinon');

describe('Movie Controller Tests', function(){
    describe('Post', function(){
        it('should not allow an empty title on post',function(){
            var Movie = function(movie){this.save = function(){}};
            
            var req = {
                body: {
                        t2: 'twisting',
                        genre: "science fiction"
                      }
            }

            var res = {
                status: sinon.spy(),
                send: sinon.spy()
            }

            var bookController = require('../controllers/movieController')(Movie);
            
            bookController.post(req,res);
            
            res.status.calledWith(400).should.equal(false,'Bad Status ' + res.status.args[0][0]);
            res.send.calledWith('Title is required').should.equal(false);
        })
    })
})