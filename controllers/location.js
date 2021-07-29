import Location_model from "../models/location";
import vm from "v-response";

exports.create_location = (req, res, next) => {
    let location_body = req.body;
    const new_location = new Location_model(location_body);
    new_location.save()
        .then( saved => {
            if(!saved) {
                return res.status(400)
                    .json(vm.ApiResponse(false, 400, "unable to save location please try again."));
            }
            if (saved) {
                return res.status(201)
                    .json(vm.ApiResponse(true, 201, "location created succesfully", saved));
            }
        }).catch(error => {
            return res.status(500)
                .json(vm.ApiResponse(false, 500, "An error has occured", undefined, error));
        });
};