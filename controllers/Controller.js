import Service from "../services/Service.js";
class Controller {
  service = new Service();
  getAllFrase = async (req, res) => {
    try {
      const data = await this.service.getAllFraseService();
      res
        .status(200)
        .send({ success: true, message: data});
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default Controller;
