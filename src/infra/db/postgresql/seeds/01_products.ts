import * as Knex from "knex";
import images from './images/base64images'

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("core.products").del();

    // Inserts seed entries
    await knex("core.products").insert([
        { id: 1, name: "Product1", description: 'a product', image: images[0], factor:'A'  },
        { id: 2, name: "Product2", description: 'a product', image: images[1], factor:'B'  },
        { id: 3, name: "Product3", description: 'a product', image: images[2], factor:'C'  }
    ]);
};
