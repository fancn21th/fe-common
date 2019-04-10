/**
 * Created by lx on 16/9/19.
 */
module.exports= {
  email: (email)=>/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email),
}
