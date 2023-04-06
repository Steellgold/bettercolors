import { Colors } from "$core/colors";
import { Configuration } from "$core/colors.types";

const config: Configuration = {
  date: {
    enabled: true,
    surrounded: "[]",
    format: "DD/MM/YYYY HH:mm:ss"
  }
};

const client = new Colors(config);
client.success("Super success testing message!");
client.error("Super error testing message!");
client.warning("Super warning testing message!");
client.info("Super info testing message!");
client.debug("Super debug testing message!");
client.log("Super log testing message!");