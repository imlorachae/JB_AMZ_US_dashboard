// amazon_dashboard.js
// ──── EMBEDDED DATA ────────────────────────────────────────────────
const PRELOADED = [{"yr":2026,"mo":2,"day":1,"dow":"Sun","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":2.0,"adSpend":0.0,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":2,"day":2,"dow":"Mon","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":4.0,"adSpend":0.0,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":2,"day":3,"dow":"Tue","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":0.0,"adSpend":0.0,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":2,"day":4,"dow":"Wed","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":3.0,"adSpend":0.0,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":2,"day":5,"dow":"Thu","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":0.0,"adSpend":0.0,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":2,"day":6,"dow":"Fri","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":0.0,"adSpend":0.0,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":2,"day":7,"dow":"Sat","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":1.0,"adSpend":0.0,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":2,"day":8,"dow":"Sun","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":0.0,"adSpend":0.0,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":2,"day":9,"dow":"Mon","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":0.0,"adSpend":0.0,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":2,"day":10,"dow":"Tue","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":0.0,"adSpend":0.0,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":2,"day":11,"dow":"Wed","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":0.0,"adSpend":0.0,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":2,"day":12,"dow":"Thu","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":1.0,"adSpend":0.0,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":2,"day":13,"dow":"Fri","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":0.0,"adSpend":0.0,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":2,"day":14,"dow":"Sat","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":1.0,"adSpend":0.0,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":2,"day":15,"dow":"Sun","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":2.0,"adSpend":0.0,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":2,"day":16,"dow":"Mon","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":0.0,"adSpend":0.0,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":2,"day":17,"dow":"Tue","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":1.0,"adSpend":0.0,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":2,"day":18,"dow":"Wed","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":1.0,"adSpend":0.0,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":2,"day":19,"dow":"Thu","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":1.0,"adSpend":0.0,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":2,"day":20,"dow":"Fri","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":0.0,"adSpend":0.0,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":2,"day":21,"dow":"Sat","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":1.0,"adSpend":0.0,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":2,"day":22,"dow":"Sun","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":4.0,"adSpend":0.0,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":2,"day":23,"dow":"Mon","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":2.0,"adSpend":0.0,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":2,"day":24,"dow":"Tue","sales":96.0,"salesKRW":141760.32,"orders":2.0,"items":2.0,"sessions":1.0,"adSpend":0.0,"adSales":0.0,"organic":96.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":2,"day":25,"dow":"Wed","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":12.0,"adSpend":0.0,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":2,"day":26,"dow":"Thu","sales":2930.0,"salesKRW":4326643.1,"orders":75.0,"items":75.0,"sessions":108.0,"adSpend":0.0,"adSales":0.0,"organic":2930.0,"vine_adj":-2895.0,"vine_desc":"Vine (분할 1/2)","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":2,"day":27,"dow":"Fri","sales":2860.0,"salesKRW":4223276.2,"orders":65.0,"items":65.0,"sessions":141.0,"adSpend":0.0,"adSales":0.0,"organic":2860.0,"vine_adj":-2895.0,"vine_desc":"Vine (분할 2/2)","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":2,"day":28,"dow":"Sat","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":24.0,"adSpend":0.0,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":3,"day":1,"dow":"Sun","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":15.0,"adSpend":0.0,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":3,"day":2,"dow":"Mon","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":24.0,"adSpend":0.0,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":3,"day":3,"dow":"Tue","sales":65.0,"salesKRW":95983.55,"orders":1.0,"items":1.0,"sessions":29.0,"adSpend":0.0,"adSales":0.0,"organic":65.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":3,"day":4,"dow":"Wed","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":21.0,"adSpend":0.0,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":3,"day":5,"dow":"Thu","sales":65.0,"salesKRW":95983.55,"orders":1.0,"items":1.0,"sessions":20.0,"adSpend":0.0,"adSales":0.0,"organic":65.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":3,"day":6,"dow":"Fri","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":23.0,"adSpend":0.0,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":3,"day":7,"dow":"Sat","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":18.0,"adSpend":0.0,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":3,"day":8,"dow":"Sun","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":10.0,"adSpend":0.0,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":3,"day":9,"dow":"Mon","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":10.0,"adSpend":0.0,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":3,"day":10,"dow":"Tue","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":23.0,"adSpend":10.42,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":3,"day":11,"dow":"Wed","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":12.0,"adSpend":8.09,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":3,"day":12,"dow":"Thu","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":47.0,"adSpend":60.88,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":3,"day":13,"dow":"Fri","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":23.0,"adSpend":20.47,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":3,"day":14,"dow":"Sat","sales":57.0,"salesKRW":84170.19,"orders":1.0,"items":1.0,"sessions":36.0,"adSpend":30.97,"adSales":0.0,"organic":57.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":3,"day":15,"dow":"Sun","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":33.0,"adSpend":32.44,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":3,"day":16,"dow":"Mon","sales":1950.0,"salesKRW":2879506.5,"orders":30.0,"items":30.0,"sessions":93.0,"adSpend":27.54,"adSales":65.0,"organic":1885.0,"vine_adj":-1950.0,"vine_desc":"Vine","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":3,"day":17,"dow":"Tue","sales":34.0,"salesKRW":50206.78,"orders":1.0,"items":1.0,"sessions":32.0,"adSpend":19.77,"adSales":34.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":3,"day":18,"dow":"Wed","sales":32.0,"salesKRW":47253.44,"orders":1.0,"items":1.0,"sessions":27.0,"adSpend":20.22,"adSales":0.0,"organic":32.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":3,"day":19,"dow":"Thu","sales":130.0,"salesKRW":191967.1,"orders":2.0,"items":1.0,"sessions":35.0,"adSpend":23.55,"adSales":130.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":3,"day":20,"dow":"Fri","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":26.0,"adSpend":19.1,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":3,"day":21,"dow":"Sat","sales":32.0,"salesKRW":47253.44,"orders":1.0,"items":1.0,"sessions":35.0,"adSpend":27.17,"adSales":32.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":3,"day":22,"dow":"Sun","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":57.0,"adSpend":45.06,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":3,"day":23,"dow":"Mon","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":44.0,"adSpend":31.25,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":3,"day":24,"dow":"Tue","sales":122.0,"salesKRW":180153.74,"orders":2.0,"items":2.0,"sessions":53.0,"adSpend":25.47,"adSales":122.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":3,"day":25,"dow":"Wed","sales":65.0,"salesKRW":95983.55,"orders":1.0,"items":1.0,"sessions":51.0,"adSpend":48.41,"adSales":65.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":3,"day":26,"dow":"Thu","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":57.0,"adSpend":56.88,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":3,"day":27,"dow":"Fri","sales":130.0,"salesKRW":191967.1,"orders":2.0,"items":2.0,"sessions":53.0,"adSpend":54.3,"adSales":65.0,"organic":65.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":3,"day":28,"dow":"Sat","sales":65.0,"salesKRW":95983.55,"orders":1.0,"items":1.0,"sessions":77.0,"adSpend":64.2,"adSales":65.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":3,"day":29,"dow":"Sun","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":86.0,"adSpend":74.14,"adSales":117.0,"organic":-117.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":3,"day":30,"dow":"Mon","sales":182.0,"salesKRW":268753.94,"orders":3.0,"items":3.0,"sessions":57.0,"adSpend":52.13,"adSales":65.0,"organic":117.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":3,"day":31,"dow":"Tue","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":65.0,"adSpend":72.29,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":4,"day":1,"dow":"Wed","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":48.0,"adSpend":50.97,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":4,"day":2,"dow":"Thu","sales":130.0,"salesKRW":191271.6,"orders":2.0,"items":2.0,"sessions":44.0,"adSpend":40.49,"adSales":130.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":4,"day":3,"dow":"Fri","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":48.0,"adSpend":49.58,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":4,"day":4,"dow":"Sat","sales":195.0,"salesKRW":286907.4,"orders":3.0,"items":3.0,"sessions":63.0,"adSpend":65.16,"adSales":130.0,"organic":65.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":4,"day":5,"dow":"Sun","sales":34.0,"salesKRW":50024.88,"orders":1.0,"items":1.0,"sessions":68.0,"adSpend":65.05,"adSales":99.0,"organic":-65.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":4,"day":6,"dow":"Mon","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":61.0,"adSpend":69.2,"adSales":130.0,"organic":-130.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":4,"day":7,"dow":"Tue","sales":260.0,"salesKRW":382543.2,"orders":4.0,"items":4.0,"sessions":47.0,"adSpend":69.23,"adSales":65.0,"organic":195.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":4,"day":8,"dow":"Wed","sales":65.0,"salesKRW":95635.8,"orders":1.0,"items":1.0,"sessions":48.0,"adSpend":48.78,"adSales":0.0,"organic":65.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":4,"day":9,"dow":"Thu","sales":65.0,"salesKRW":95635.8,"orders":1.0,"items":1.0,"sessions":63.0,"adSpend":92.27,"adSales":130.0,"organic":-65.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":4,"day":10,"dow":"Fri","sales":130.0,"salesKRW":191271.6,"orders":2.0,"items":2.0,"sessions":46.0,"adSpend":56.24,"adSales":65.0,"organic":65.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":4,"day":11,"dow":"Sat","sales":364.0,"salesKRW":535560.48,"orders":6.0,"items":6.0,"sessions":81.0,"adSpend":89.66,"adSales":299.0,"organic":65.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":4,"day":12,"dow":"Sun","sales":65.0,"salesKRW":95635.8,"orders":1.0,"items":1.0,"sessions":70.0,"adSpend":67.21,"adSales":65.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":4,"day":13,"dow":"Mon","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":36.0,"adSpend":29.63,"adSales":0.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":4,"day":14,"dow":"Tue","sales":2015.0,"salesKRW":2964709.8,"orders":31.0,"items":31.0,"sessions":102.0,"adSpend":68.58,"adSales":65.0,"organic":1950.0,"vine_adj":-1950.0,"vine_desc":"vine (eye patch)","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":4,"day":15,"dow":"Wed","sales":130.0,"salesKRW":191271.6,"orders":2.0,"items":2.0,"sessions":91.0,"adSpend":109.3,"adSales":65.0,"organic":65.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":4,"day":16,"dow":"Thu","sales":32.0,"salesKRW":47082.24,"orders":1.0,"items":1.0,"sessions":83.0,"adSpend":96.39,"adSales":32.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":4,"day":17,"dow":"Fri","sales":65.0,"salesKRW":95635.8,"orders":1.0,"items":1.0,"sessions":74.0,"adSpend":90.74,"adSales":0.0,"organic":65.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":4,"day":18,"dow":"Sat","sales":65.0,"salesKRW":95635.8,"orders":1.0,"items":1.0,"sessions":82.0,"adSpend":108.29,"adSales":32.0,"organic":33.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":4,"day":19,"dow":"Sun","sales":129.0,"salesKRW":189800.28,"orders":3.0,"items":3.0,"sessions":83.0,"adSpend":105.65,"adSales":64.0,"organic":65.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":4,"day":20,"dow":"Mon","sales":136.0,"salesKRW":200099.52,"orders":3.0,"items":3.0,"sessions":89.0,"adSpend":91.77,"adSales":136.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":4,"day":21,"dow":"Tue","sales":97.0,"salesKRW":142718.04,"orders":2.0,"items":2.0,"sessions":63.0,"adSpend":101.23,"adSales":130.0,"organic":-33.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":4,"day":22,"dow":"Wed","sales":130.0,"salesKRW":191271.6,"orders":2.0,"items":2.0,"sessions":69.0,"adSpend":123.57,"adSales":178.0,"organic":-48.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":4,"day":23,"dow":"Thu","sales":65.0,"salesKRW":95635.8,"orders":1.0,"items":1.0,"sessions":89.0,"adSpend":133.81,"adSales":32.0,"organic":33.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":4,"day":24,"dow":"Fri","sales":65.0,"salesKRW":95635.8,"orders":1.0,"items":1.0,"sessions":101.0,"adSpend":159.65,"adSales":0.0,"organic":65.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":4,"day":25,"dow":"Sat","sales":243.0,"salesKRW":357530.76,"orders":4.0,"items":4.0,"sessions":110.0,"adSpend":128.49,"adSales":40.0,"organic":203.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":4,"day":26,"dow":"Sun","sales":252.0,"salesKRW":370772.64,"orders":4.0,"items":4.0,"sessions":126.0,"adSpend":164.57,"adSales":252.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":4,"day":27,"dow":"Mon","sales":325.0,"salesKRW":478179.0,"orders":5.0,"items":5.0,"sessions":87.0,"adSpend":110.84,"adSales":130.0,"organic":195.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":4,"day":28,"dow":"Tue","sales":422.0,"salesKRW":620897.04,"orders":7.0,"items":3.0,"sessions":112.0,"adSpend":131.8,"adSales":422.0,"organic":0.0,"vine_adj":0,"vine_desc":"","impr":0,"clicks":0,"adOrders":0},{"yr":2026,"mo":4,"day":29,"dow":"Wed","sales":32.0,"salesKRW":47082.24,"orders":1.0,"items":1.0,"sessions":88.0,"adSpend":129.95,"adSales":0.0,"organic":32.0,"vine_adj":0,"vine_desc":"","impr":1781,"clicks":70,"adOrders":0},{"yr":2026,"mo":4,"day":30,"dow":"Thu","sales":260.0,"salesKRW":478179.0,"orders":4.0,"items":4.0,"sessions":87.0,"adSpend":123.66,"adSales":195.0,"organic":65.0,"vine_adj":0,"vine_desc":"","impr":2351,"clicks":66,"adOrders":3},{"yr":2026,"mo":5,"day":1,"dow":"Fri","sales":40.0,"salesKRW":60313.6,"orders":1.0,"items":1.0,"sessions":71.0,"adSpend":99.0,"adSales":0.0,"organic":40.0,"vine_adj":0,"vine_desc":"","impr":1484,"clicks":58,"adOrders":0},{"yr":2026,"mo":5,"day":2,"dow":"Sat","sales":187.0,"salesKRW":281966.08,"orders":3.0,"items":3.0,"sessions":83.0,"adSpend":104.04,"adSales":187.0,"organic":0,"vine_adj":0,"vine_desc":"","impr":1614,"clicks":61,"adOrders":3},{"yr":2026,"mo":5,"day":3,"dow":"Sun","sales":195.0,"salesKRW":294028.8,"orders":3.0,"items":3.0,"sessions":89.0,"adSpend":111.61,"adSales":65.0,"organic":130.0,"vine_adj":0,"vine_desc":"","impr":1090,"clicks":63,"adOrders":1},{"yr":2026,"mo":5,"day":4,"dow":"Mon","sales":92.0,"salesKRW":138721.28,"orders":2.0,"items":2.0,"sessions":73.0,"adSpend":120.47,"adSales":32.0,"organic":60.0,"vine_adj":0,"vine_desc":"","impr":1810,"clicks":60,"adOrders":1},{"yr":2026,"mo":5,"day":5,"dow":"Tue","sales":97.0,"salesKRW":146260.48,"orders":2.0,"items":2.0,"sessions":99.0,"adSpend":131.79,"adSales":97.0,"organic":0,"vine_adj":0,"vine_desc":"","impr":1888,"clicks":74,"adOrders":2},{"yr":2026,"mo":5,"day":6,"dow":"Wed","sales":32.0,"salesKRW":48250.88,"orders":1.0,"items":1.0,"sessions":80.0,"adSpend":81.45,"adSales":32.0,"organic":0,"vine_adj":0,"vine_desc":"","impr":1584,"clicks":50,"adOrders":1},{"yr":2026,"mo":5,"day":7,"dow":"Thu","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":90.0,"adSpend":114.87,"adSales":0.0,"organic":0,"vine_adj":0,"vine_desc":"","impr":2764,"clicks":66,"adOrders":0},{"yr":2026,"mo":5,"day":8,"dow":"Fri","sales":65.0,"salesKRW":98009.6,"orders":1.0,"items":1.0,"sessions":70.0,"adSpend":99.18,"adSales":0.0,"organic":65.0,"vine_adj":0,"vine_desc":"","impr":2003,"clicks":54,"adOrders":0},{"yr":2026,"mo":5,"day":9,"dow":"Sat","sales":130.0,"salesKRW":196019.2,"orders":2.0,"items":2.0,"sessions":82.0,"adSpend":117.0,"adSales":0.0,"organic":130.0,"vine_adj":0,"vine_desc":"","impr":1515,"clicks":65,"adOrders":0},{"yr":2026,"mo":5,"day":10,"dow":"Sun","sales":97.0,"salesKRW":146260.48,"orders":2.0,"items":2.0,"sessions":51.0,"adSpend":43.26,"adSales":65.0,"organic":32.0,"vine_adj":0,"vine_desc":"","impr":884,"clicks":27,"adOrders":1},{"yr":2026,"mo":5,"day":11,"dow":"Mon","sales":100.0,"salesKRW":150784.0,"orders":2.0,"items":2.0,"sessions":70.0,"adSpend":61.8,"adSales":130.0,"organic":0,"vine_adj":0,"vine_desc":"","impr":616,"clicks":39,"adOrders":2},{"yr":2026,"mo":5,"day":12,"dow":"Tue","sales":65.0,"salesKRW":98009.6,"orders":1.0,"items":1.0,"sessions":62.0,"adSpend":56.21,"adSales":0.0,"organic":65.0,"vine_adj":0,"vine_desc":"","impr":770,"clicks":35,"adOrders":0},{"yr":2026,"mo":5,"day":13,"dow":"Wed","sales":195.0,"salesKRW":294028.8,"orders":3.0,"items":3.0,"sessions":50.0,"adSpend":66.67,"adSales":0.0,"organic":195.0,"vine_adj":0,"vine_desc":"","impr":999,"clicks":39,"adOrders":0},{"yr":2026,"mo":5,"day":14,"dow":"Thu","sales":0.0,"salesKRW":0.0,"orders":0.0,"items":0.0,"sessions":60.0,"adSpend":94.73,"adSales":0.0,"organic":0,"vine_adj":0,"vine_desc":"","impr":2403,"clicks":52,"adOrders":0},{"yr":2026,"mo":5,"day":15,"dow":"Fri","sales":105.0,"salesKRW":158323.2,"orders":2.0,"items":2.0,"sessions":249.0,"adSpend":113.34,"adSales":54.79,"organic":50.21,"vine_adj":0,"vine_desc":"","impr":3033,"clicks":72,"adOrders":1},{"yr":2026,"mo":5,"day":16,"dow":"Sat","sales":144.58,"salesKRW":218003.5072,"orders":3.0,"items":3.0,"sessions":150.0,"adSpend":164.72,"adSales":89.79,"organic":54.79,"vine_adj":0,"vine_desc":"","impr":4829,"clicks":72,"adOrders":2},{"yr":2026,"mo":5,"day":17,"dow":"Sun","sales":328.74,"salesKRW":495687.3216,"orders":6.0,"items":6.0,"sessions":103.0,"adSpend":198.91,"adSales":363.74,"organic":0,"vine_adj":0,"vine_desc":"","impr":3641,"clicks":93,"adOrders":7},{"yr":2026,"mo":5,"day":18,"dow":"Mon","sales":294.16,"salesKRW":443546.2144,"orders":6.0,"items":6.0,"sessions":76.0,"adSpend":92.7,"adSales":164.37,"organic":129.79,"vine_adj":0,"vine_desc":"","impr":1236,"clicks":48,"adOrders":3},{"yr":2026,"mo":5,"day":19,"dow":"Tue","sales":289.0,"salesKRW":435765.76,"orders":5.0,"items":4.0,"sessions":84.0,"adSpend":123.33,"adSales":204.37,"organic":84.63,"vine_adj":0,"vine_desc":"","impr":1355,"clicks":55,"adOrders":4},{"yr":2026,"mo":5,"day":20,"dow":"Wed","sales":249.58,"salesKRW":376326.7072,"orders":4.0,"items":4.0,"sessions":124.0,"adSpend":160.57,"adSales":54.79,"organic":194.79,"vine_adj":0,"vine_desc":"","impr":2997,"clicks":79,"adOrders":2},{"yr":2026,"mo":5,"day":21,"dow":"Thu","sales":164.37,"salesKRW":247843.6608,"orders":4.0,"items":4.0,"sessions":98.0,"adSpend":153.35,"adSales":164.37,"organic":0,"vine_adj":0,"vine_desc":"","impr":1299,"clicks":80,"adOrders":3},{"yr":2026,"mo":5,"day":22,"dow":"Fri","sales":54.79,"salesKRW":82614.5536,"orders":1.0,"items":1.0,"sessions":57.0,"adSpend":95.56,"adSales":109.58,"organic":0,"vine_adj":0,"vine_desc":"","impr":1293,"clicks":44,"adOrders":2},{"yr":2026,"mo":5,"day":23,"dow":"Sat","sales":141.58,"salesKRW":213479.9872,"orders":3.0,"items":3.0,"sessions":79.0,"adSpend":118.97,"adSales":86.79,"organic":54.79,"vine_adj":0,"vine_desc":"","impr":1250,"clicks":59,"adOrders":2},{"yr":2026,"mo":5,"day":24,"dow":"Sun","sales":219.16,"salesKRW":330458.2144,"orders":4.0,"items":4.0,"sessions":92.0,"adSpend":144.88,"adSales":164.37,"organic":54.79,"vine_adj":0,"vine_desc":"","impr":1628,"clicks":69,"adOrders":3},{"yr":2026,"mo":5,"day":25,"dow":"Mon","sales":383.53,"salesKRW":578301.8752,"orders":7.0,"items":7.0,"sessions":84.0,"adSpend":129.21,"adSales":328.74,"organic":54.79,"vine_adj":0,"vine_desc":"","impr":1354,"clicks":65,"adOrders":6},{"yr":2026,"mo":5,"day":26,"dow":"Tue","sales":109.58,"salesKRW":165229.1072,"orders":2.0,"items":2.0,"sessions":81.0,"adSpend":110.42,"adSales":164.37,"organic":0,"vine_adj":0,"vine_desc":"","impr":1199,"clicks":65,"adOrders":3},{"yr":2026,"mo":5,"day":27,"dow":"Wed","sales":164.37,"salesKRW":247843.6608,"orders":3.0,"items":2.0,"sessions":119.0,"adSpend":159.46,"adSales":109.58,"organic":54.79,"vine_adj":0,"vine_desc":"","impr":1442,"clicks":86,"adOrders":2},{"yr":2026,"mo":5,"day":28,"dow":"Thu","sales":109.58,"salesKRW":165229.1072,"orders":2.0,"items":2.0,"sessions":154.0,"adSpend":142.59,"adSales":0.0,"organic":109.58,"vine_adj":0,"vine_desc":"","impr":1687,"clicks":82,"adOrders":2},{"yr":2026,"mo":5,"day":29,"dow":"Fri","sales":273.95,"salesKRW":413072.77,"orders":5.0,"items":4.0,"sessions":111.0,"adSpend":149.02,"adSales":196.37,"organic":77.58,"vine_adj":0,"vine_desc":"","impr":2277,"clicks":86,"adOrders":3},{"yr":2026,"mo":5,"day":30,"dow":"Sat","sales":206.58,"salesKRW":311489.59,"orders":4.0,"items":4.0,"sessions":126.0,"adSpend":183.09,"adSales":109.58,"organic":97,"vine_adj":0,"vine_desc":"","impr":3839,"clicks":104,"adOrders":2},{"yr":2026,"mo":5,"day":31,"dow":"Sun","sales":164.37,"salesKRW":247843.66,"orders":3.0,"items":3.0,"sessions":140.0,"adSpend":178.31,"adSales":109.58,"organic":54.79,"vine_adj":0,"vine_desc":"","impr":3926,"clicks":105,"adOrders":1},{"yr":2026,"mo":6,"day":1,"dow":"Mon","sales":253.16,"salesKRW":381724.77,"orders":5.0,"items":5.0,"sessions":144.0,"adSpend":162.12,"adSales":198.37,"organic":54.79,"vine_adj":0,"vine_desc":"","impr":1630,"clicks":89,"adOrders":5},{"yr":2026,"mo":6,"day":2,"dow":"Tue","sales":198.37,"salesKRW":299110.22,"orders":4.0,"items":4.0,"sessions":149.0,"adSpend":172.78,"adSales":143.58,"organic":54.79,"vine_adj":0,"vine_desc":"","impr":2936,"clicks":89,"adOrders":3},{"yr":2026,"mo":6,"day":3,"dow":"Wed","sales":277.58,"salesKRW":418546.23,"orders":7.0,"items":7.0,"sessions":133.0,"adSpend":171.39,"adSales":34,"organic":243.58,"vine_adj":0,"vine_desc":"","impr":3049,"clicks":103,"adOrders":1},{"yr":2026,"mo":6,"day":4,"dow":"Thu","sales":196.79,"salesKRW":296727.83,"orders":5.0,"items":5.0,"sessions":149.0,"adSpend":205.29,"adSales":54.79,"organic":142,"vine_adj":0,"vine_desc":"","impr":2487,"clicks":123,"adOrders":1}];
const KEYWORD_DATA={"keywords":[{"kw":"substitutes","impr":7333,"clicks":560,"spend":867.96,"sales":448.53,"orders":9},{"kw":"co2 mask","impr":4084,"clicks":108,"spend":267.2,"sales":458.74,"orders":8},{"kw":"close-match","impr":6617,"clicks":137,"spend":247.78,"sales":122.0,"orders":2},{"kw":"carboxy therapy","impr":8987,"clicks":107,"spend":245.21,"sales":403.95,"orders":6},{"kw":"complements","impr":361,"clicks":165,"spend":241.56,"sales":109.58,"orders":2},{"kw":"co2 mask for face","impr":2206,"clicks":95,"spend":232.25,"sales":393.74,"orders":7},{"kw":"co2 carboxy mask","impr":5293,"clicks":81,"spend":227.68,"sales":219.16,"orders":4},{"kw":"loose-match","impr":962,"clicks":125,"spend":218.73,"sales":239.58,"orders":4},{"kw":"carboxy","impr":1973,"clicks":73,"spend":139.39,"sales":54.79,"orders":1},{"kw":"co2 lift mask","impr":1540,"clicks":44,"spend":101.21,"sales":109.58,"orders":2},{"kw":"asin-expanded=\"B0D3V1WN55\"","impr":2160,"clicks":40,"spend":59.38,"sales":0.0,"orders":0},{"kw":"jung beauty","impr":831,"clicks":40,"spend":55.17,"sales":137.0,"orders":3},{"kw":"serum","impr":208,"clicks":18,"spend":50.2,"sales":35.0,"orders":1},{"kw":"keyword-group=\"Keywords related to your product category\"","impr":207,"clicks":14,"spend":43.71,"sales":35.0,"orders":1},{"kw":"korean hair products","impr":517,"clicks":14,"spend":29.75,"sales":0.0,"orders":0},{"kw":"micellar water amazon","impr":116,"clicks":12,"spend":26.8,"sales":32.0,"orders":1},{"kw":"micellar cleansing water","impr":927,"clicks":12,"spend":24.45,"sales":0.0,"orders":0},{"kw":"pore minimizer","impr":919,"clicks":9,"spend":24.27,"sales":0.0,"orders":0},{"kw":"micellar water makeup remover","impr":298,"clicks":13,"spend":21.85,"sales":0.0,"orders":0},{"kw":"asin-expanded=\"B09DRTKC5X\"","impr":867,"clicks":14,"spend":20.74,"sales":0.0,"orders":0},{"kw":"asin-expanded=\"B06XXZHNQJ\"","impr":1591,"clicks":11,"spend":20.52,"sales":0.0,"orders":0},{"kw":"miscellaneous water makeup remover","impr":12,"clicks":9,"spend":20.37,"sales":0.0,"orders":0},{"kw":"co2 lift pro carboxy gel","impr":745,"clicks":10,"spend":19.08,"sales":0.0,"orders":0},{"kw":"korean hair care","impr":239,"clicks":9,"spend":18.98,"sales":0.0,"orders":0},{"kw":"hair growth products","impr":205,"clicks":9,"spend":18.97,"sales":0.0,"orders":0},{"kw":"jungbeauty","impr":190,"clicks":11,"spend":18.12,"sales":32.0,"orders":1},{"kw":"asin-expanded=\"B09VJJS2N5\"","impr":203,"clicks":10,"spend":14.17,"sales":0.0,"orders":0},{"kw":"hair care","impr":895,"clicks":10,"spend":13.86,"sales":0.0,"orders":0},{"kw":"asin-expanded=\"B0D3Z73HNK\"","impr":340,"clicks":8,"spend":13.76,"sales":0.0,"orders":0},{"kw":"best hair products for hard water","impr":115,"clicks":6,"spend":13.6,"sales":0.0,"orders":0},{"kw":"microcellular water makeup remover","impr":199,"clicks":7,"spend":13.4,"sales":32.0,"orders":1},{"kw":"co2 lift","impr":35,"clicks":5,"spend":9.32,"sales":0.0,"orders":0},{"kw":"asin-expanded=\"B0GKPSH89W\"","impr":129,"clicks":5,"spend":8.72,"sales":0.0,"orders":0},{"kw":"co2 lift pro mask","impr":101,"clicks":4,"spend":8.46,"sales":0.0,"orders":0},{"kw":"pore serum","impr":83,"clicks":3,"spend":8.19,"sales":0.0,"orders":0},{"kw":"hair oil frizzy","impr":107,"clicks":4,"spend":8.03,"sales":0.0,"orders":0},{"kw":"micellar water rosewater","impr":27,"clicks":3,"spend":7.6,"sales":0.0,"orders":0},{"kw":"asin-expanded=\"B0FG3CDGWH\"","impr":1684,"clicks":4,"spend":7.14,"sales":0.0,"orders":0},{"kw":"micellar water eye makeup remover","impr":4,"clicks":3,"spend":6.25,"sales":0.0,"orders":0},{"kw":"niacinamide","impr":8,"clicks":2,"spend":6.14,"sales":0.0,"orders":0},{"kw":"prewash hair oil","impr":7,"clicks":2,"spend":5.7,"sales":0.0,"orders":0},{"kw":"korean hair treatment","impr":52,"clicks":3,"spend":5.41,"sales":0.0,"orders":0},{"kw":"micellar water oil free","impr":5,"clicks":3,"spend":5.01,"sales":0.0,"orders":0},{"kw":"microcellular cleansing water","impr":2,"clicks":2,"spend":4.54,"sales":0.0,"orders":0},{"kw":"korean hair conditioner","impr":203,"clicks":2,"spend":4.51,"sales":0.0,"orders":0},{"kw":"niacinamide serum","impr":44,"clicks":2,"spend":4.37,"sales":0.0,"orders":0},{"kw":"face serum","impr":4,"clicks":2,"spend":4.26,"sales":0.0,"orders":0},{"kw":"demaquillant for face","impr":10,"clicks":2,"spend":3.8,"sales":0.0,"orders":0},{"kw":"nsc professional carboxy therapy","impr":25,"clicks":2,"spend":3.8,"sales":0.0,"orders":0},{"kw":"molecular water makeup remover","impr":4,"clicks":2,"spend":3.6,"sales":0.0,"orders":0},{"kw":"hair treatment","impr":16,"clicks":3,"spend":2.86,"sales":0.0,"orders":0},{"kw":"face serum women","impr":1,"clicks":1,"spend":2.55,"sales":0.0,"orders":0},{"kw":"pore tightening","impr":1,"clicks":1,"spend":2.42,"sales":0.0,"orders":0},{"kw":"miracle water for hair","impr":40,"clicks":2,"spend":2.34,"sales":0.0,"orders":0},{"kw":"pore minimizing","impr":4,"clicks":1,"spend":1.86,"sales":0.0,"orders":0},{"kw":"asin-expanded=\"B08TQYSNR4\"","impr":8,"clicks":1,"spend":1.78,"sales":0.0,"orders":0},{"kw":"asin-expanded=\"B0CNQQLCHS\"","impr":12,"clicks":1,"spend":1.77,"sales":0.0,"orders":0},{"kw":"carboxiterapia maquina co2 corporal","impr":40,"clicks":1,"spend":1.65,"sales":0.0,"orders":0},{"kw":"micellar water rose","impr":3,"clicks":1,"spend":1.5,"sales":0.0,"orders":0}],"campaigns":[{"name":"SP_Co2mask_taget_KW","impr":19375,"clicks":440,"spend":977.32,"sales":1311.22,"orders":23},{"name":"Co2_auto_Close Match","impr":7427,"clicks":264,"spend":519.14,"sales":260.0,"orders":4},{"name":"Co2_auto_Substitutes","impr":2560,"clicks":294,"spend":460.9,"sales":383.53,"orders":8},{"name":"SP_auto_hair_Close Match","impr":3749,"clicks":179,"spend":235.66,"sales":57.0,"orders":1},{"name":"Co2_auto_Complements","impr":155,"clicks":113,"spend":169.7,"sales":109.58,"orders":2},{"name":"SP_CO2_KW_co2 carboxy mask","impr":3734,"clicks":49,"spend":163.73,"sales":219.16,"orders":4},{"name":"SP_Co2mask_target_product","impr":6994,"clicks":94,"spend":147.98,"sales":0.0,"orders":0},{"name":"SP_ampule_taget_KW","impr":1479,"clicks":53,"spend":147.97,"sales":70.0,"orders":2},{"name":"SP_Cleanser_water_taget2_KW","impr":1607,"clicks":69,"spend":139.17,"sales":64.0,"orders":2},{"name":"Co2_auto_Loose Match","impr":591,"clicks":76,"spend":126.5,"sales":109.58,"orders":2},{"name":"SP_hair_watertreatment_taget_KW","impr":2396,"clicks":64,"spend":124.01,"sales":0.0,"orders":0},{"name":"SP_Co2_target_carboxy therapy","impr":1920,"clicks":41,"spend":114.2,"sales":109.58,"orders":1},{"name":"SP_Brand KW","impr":1021,"clicks":51,"spend":73.29,"sales":169.0,"orders":4},{"name":"SP_auto_hair_water_Substitutes","impr":757,"clicks":52,"spend":56.86,"sales":0.0,"orders":0},{"name":"SP_auto_hair_water_Complements","impr":32,"clicks":8,"spend":6.25,"sales":0.0,"orders":0},{"name":"SP_auto_hair_Loose Match","impr":2,"clicks":1,"spend":1.02,"sales":0.0,"orders":0}],"dow":[{"dow":"Mon","spend":404.18,"sales":655.11,"orders":12,"clicks":212},{"dow":"Tue","spend":421.75,"sales":465.74,"orders":9,"clicks":229},{"dow":"Wed","spend":598.1,"sales":196.37,"orders":4,"clicks":324},{"dow":"Thu","spend":629.2,"sales":359.37,"orders":6,"clicks":346},{"dow":"Fri","spend":407.08,"sales":164.37,"orders":3,"clicks":228},{"dow":"Sat","spend":504.73,"sales":363.58,"orders":7,"clicks":257},{"dow":"Sun","spend":498.66,"sales":658.11,"orders":12,"clicks":252}],"newKeywords":[{"term":"carboxy co2 therapy face","spend":250.99,"sales":284.16,"orders":4,"clicks":122},{"term":"facial mask","spend":32.76,"sales":109.58,"orders":2,"clicks":14},{"term":"korean face mask","spend":48.04,"sales":109.58,"orders":2,"clicks":16},{"term":"b0dzz5jcg4","spend":2.22,"sales":65.0,"orders":1,"clicks":1},{"term":"co2 facial mask","spend":3.81,"sales":65.0,"orders":1,"clicks":2},{"term":"dj carbon therapy co2 gel mask 1box","spend":1.86,"sales":65.0,"orders":1,"clicks":1},{"term":"facial mask for blackheads and pores","spend":1.95,"sales":65.0,"orders":1,"clicks":1},{"term":"jung beauty carboxy co2 therapy маска для обличчя","spend":3.06,"sales":65.0,"orders":1,"clicks":1},{"term":"organic face and neck masks","spend":2.17,"sales":65.0,"orders":1,"clicks":1},{"term":"jung hair","spend":1.55,"sales":57.0,"orders":1,"clicks":1},{"term":"b01agy65na","spend":32.38,"sales":54.79,"orders":1,"clicks":17},{"term":"b076rqglc1","spend":1.8,"sales":54.79,"orders":1,"clicks":1},{"term":"b0dc6f8pcd","spend":5.69,"sales":54.79,"orders":1,"clicks":3},{"term":"b0dsl2g321","spend":2.4,"sales":54.79,"orders":1,"clicks":1},{"term":"b0f49g55jw","spend":1.92,"sales":54.79,"orders":2,"clicks":1},{"term":"b0fjv13v2l","spend":2.08,"sales":54.79,"orders":1,"clicks":1},{"term":"b0flxlp3y7","spend":2.4,"sales":54.79,"orders":1,"clicks":1},{"term":"b0fr46bl7t","spend":1.5,"sales":54.79,"orders":1,"clicks":1},{"term":"bubble oxygen face mask","spend":1.5,"sales":54.79,"orders":1,"clicks":1},{"term":"carbon dioxide face mask","spend":3.84,"sales":54.79,"orders":1,"clicks":1},{"term":"carbon oxygen mask","spend":8.05,"sales":54.79,"orders":1,"clicks":3},{"term":"carboxy co2 therapy","spend":60.94,"sales":54.79,"orders":1,"clicks":26},{"term":"co2 facial","spend":8.38,"sales":54.79,"orders":1,"clicks":4},{"term":"co2 gel face masks","spend":2.85,"sales":54.79,"orders":1,"clicks":1},{"term":"co2 mask carboxy","spend":9.05,"sales":54.79,"orders":1,"clicks":4},{"term":"feelface carboxy co2 gel mask","spend":4.5,"sales":54.79,"orders":1,"clicks":1},{"term":"hydro facial","spend":2.38,"sales":54.79,"orders":1,"clicks":1},{"term":"korean wash off face mask","spend":1.2,"sales":54.79,"orders":1,"clicks":1},{"term":"mascarillas para la cara con oxigeno","spend":3.29,"sales":54.79,"orders":1,"clicks":1},{"term":"menokin 30 seconds quick bubble mask [lift] - [collagen] & niacinamide in micro-bubbles for anti aging, boost elasticity, fine lines, korean glass skin care essential, 50 uses, 2.36 fl.oz","spend":12.52,"sales":54.79,"orders":1,"clicks":4}],
"adGroups":[
  {"name":"CO2 마스크 - 키워드 타겟","type":"KW","product":"CO2","campaigns":["SP_Co2mask_taget_KW","SP_CO2_KW_co2 carboxy mask","SP_Co2_target_carboxy therapy"],"impr":25029,"clicks":530,"spend":1255.25,"sales":1639.96,"orders":28},
  {"name":"CO2 마스크 - Auto (Close/Subs/Comp/Loose)","type":"Auto","product":"CO2","campaigns":["Co2_auto_Close Match","Co2_auto_Substitutes","Co2_auto_Complements","Co2_auto_Loose Match"],"impr":10733,"clicks":747,"spend":1276.24,"sales":862.69,"orders":16},
  {"name":"CO2 마스크 - 상품 타겟","type":"Product","product":"CO2","campaigns":["SP_Co2mask_target_product"],"impr":6994,"clicks":94,"spend":147.98,"sales":0,"orders":0},
  {"name":"헤어 - KW/Auto","type":"KW+Auto","product":"Hair","campaigns":["SP_auto_hair_Close Match","SP_hair_watertreatment_taget_KW","SP_auto_hair_water_Substitutes","SP_auto_hair_water_Complements","SP_auto_hair_Loose Match"],"impr":6936,"clicks":304,"spend":423.8,"sales":57,"orders":1},
  {"name":"앰플","type":"KW","product":"Ampule","campaigns":["SP_ampule_taget_KW"],"impr":1479,"clicks":53,"spend":147.97,"sales":70,"orders":2},
  {"name":"클렌저 / 워터","type":"KW","product":"Cleanser","campaigns":["SP_Cleanser_water_taget2_KW"],"impr":1607,"clicks":69,"spend":139.17,"sales":64,"orders":2},
  {"name":"브랜드","type":"Brand","product":"Brand","campaigns":["SP_Brand KW"],"impr":1021,"clicks":51,"spend":73.29,"sales":169,"orders":4}
]};
const VINE_ITEMS = [{"yr": 2026, "mo": 2, "day": 26, "adj": -2895, "desc": "Vine Review (\ubd84\ud560 1/2)", "orders_adj": -70}, {"yr": 2026, "mo": 2, "day": 27, "adj": -2895, "desc": "Vine Review (\ubd84\ud560 2/2)", "orders_adj": -70}, {"yr": 2026, "mo": 3, "day": 16, "adj": -1950, "desc": "Vine Review", "orders_adj": -30}, {"yr": 2026, "mo": 4, "day": 14, "adj": -1950, "desc": "Vine Review (eye patch)", "orders_adj": -30}];
const SPECIAL_EVENTS = [{"yr": 2026, "mo": 5, "day_start": 6, "day_end": 17, "desc": "\uc2e0\uc6d0\uc778\uc99d \uc774\uc288", "type": "warning"}];
const KRW_RATES = {"2026.2": 1477, "2026.3": 1477, "2026.4": 1485, "2026.5": 1508};
const SGD_RATES = {"2026.2": 1.34, "2026.3": 1.34, "2026.4": 1.34, "2026.5": 1.35};

// ──── STATE ────────────────────────────────────────────────────────
let allData=[], byMonth={}, monthKeys=[];
let appMode='sales';
let activeTab='weekly', activeCurrency='USD', vineMode='exclude', chartType='bar';
let activeMonth=null, activeYear=null, activeQuarter=null;
let activeWeekIdx=null; // null=전체, number=특정주 인덱스
let kwSortCol='sales', kwSortDir=-1;
let trendCI=null;
let _gwCache=null; // global week list cache
let rangeFrom='', rangeTo='';
let mainCI=null, donutCI=null;

// ──── i18n (item 7) ────────────────────────────────────────────────
const EN_MONTH=['','January','February','March','April','May','June','July','August','September','October','November','December'];
const EN_MONTH_S=['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const KO_MONTH=['','1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];
const DOW_KO={Mon:'월',Tue:'화',Wed:'수',Thu:'목',Fri:'금',Sat:'토',Sun:'일'};
function isKo(){ return activeCurrency==='KRW'; }
const STR={
  annual:['연간','Annual'], quarter:['분기','Quarter'], monthly:['월간','Monthly'], weekly:['주간','Weekly'], daily:['일간','Daily'], ads:['광고','Ads'], salesMode:['매출','Sales'], adsMode:['광고','Ads'], overview:['개요','Overview'], campaign:['캠페인','Campaign'], adgroup:['광고그룹','Ad Group'], keyword:['키워드 성과','KW Perf.'], allkw:['전체 키워드','All Keywords'], newkw:['신규KW','New KW'],
  vineInc:['Vine 포함','Incl. Vine'], vineExc:['Vine 제외','Excl. Vine'],
  newFile:['↩ 다른 파일','↩ New File'], period:['기간','Period'], apply:['적용','Apply'], reset:['초기화','Reset'],
  bar:['막대','Bar'], line:['선형','Line'],
  totalSales:['총 매출','Total Sales'], adSales:['광고 매출','Ad Sales'], organic:['오가닉 매출','Organic'],
  orders:['오더 건수','Orders'], items:['오더 아이템','Order Items'], adSpend:['광고비','Ad Spend'],
  roas:['Total ROAS','Total ROAS'], acos:['Total ACoS','Total ACoS'], troas:['Ad ROAS','Ad ROAS'], tacos:['Ad ACoS','Ad ACoS'],
  roasSub:['총매출÷광고비','Total Sales ÷ Ad Spend'], acosSub:['광고비÷총매출','Ad Spend ÷ Total Sales'],
  troasSub:['광고매출÷광고비','Ad Sales ÷ Ad Spend'], tacosSub:['광고비÷광고매출','Ad Spend ÷ Ad Sales'],
  confirmed:['확정','Confirmed'], projected:['예상','Projected'], inProgress:['진행중','In Progress'],
  confSales:['매출','Sales'], projSales:['예상 매출','Projected Sales'], curSales:['현재 매출','Current Sales'],
  vsPrev:['vs 전기','vs prev'], noData:['데이터 없음','No data'],
  projMonth:['이번 달 예상 매출 (캘리포니아 -2일 기준)','Projected Monthly Sales (CA -2 days)'],
  projWeek:['이번 주 예상 매출','Projected Weekly Sales'],
  confMonthTitle:['확정 매출','Confirmed Sales'], annualProj:['연간 예상 매출 (일평균×365)','Annual Projection (daily avg×365)'],
  dailyAvg:['일 평균','Daily avg'], days:['일','d'], confDays:['확정','Confirmed'], totalDays:['총','Total'],
  adVsOrg:['🥧 광고 vs 오가닉','🥧 Ad vs Organic'],
  dailyTrend:['📈 일별 매출 트렌드','📈 Daily Sales Trend'], monthlyTrend:['📊 월별 매출 현황','📊 Monthly Sales'],
  quarterTrend:['📊 분기별 매출 현황','📊 Quarterly Sales'], weeklyTrend:['📊 주간 매출 현황','📊 Weekly Sales'],
  monthlySummary:['📅 월별 매출 요약','📅 Monthly Summary'], quarterSummary:['📊 분기별 매출 요약','📊 Quarterly Summary'],
  weeklySummary:['📊 주간 매출 요약','📊 Weekly Summary'], dailyDetail:['📅 일별 상세 데이터','📅 Daily Details'],
  drillTitle:['📅 월별 상세','📅 Monthly Breakdown'],
  month:['월','Month'],quarterCol:['분기','Quarter'],status:['상태','Status'],week:['주차','Week'],
  date:['날짜','Date'],dow:['요일','Day'],session:['세션','Sessions'],vineCol:['Vine','Vine'],
  ytd:['YTD','YTD'], vineIncluded:['🌿 Vine 조정 포함','🌿 incl. Vine adj'],
  allWeeks:['전체','All'], idVerify:['신원인증 이슈','ID Verification Issue'],
  uplSub:['xlsx 업로드 또는 현재 저장된 데이터로 시작','Upload xlsx or start with saved data'],
  uplBtn:['📂 현재 데이터로 대시보드 보기','📂 View Dashboard with Current Data'],
  uplDiv:['또는 새 파일 업로드','or upload new file'],
  uplH3:['파일을 드래그하거나 클릭해서 업로드 (여러 개 동시 선택 가능)','Drag or click to upload (multi-select supported)'],
  uplP:['Google Sheets .xlsx / .csv 파일','Google Sheets .xlsx / .csv file'],
  uplNote:['파일은 브라우저에서만 처리되며 서버 업로드 없음','Processed in-browser only, no server upload'],
};
function T(k){ const s=STR[k]; return s ? (isKo()?s[0]:s[1]) : k; }
function mName(mo){ return isKo()?KO_MONTH[mo]:EN_MONTH[mo]; }
function mNameS(mo){ return isKo()?KO_MONTH[mo]:EN_MONTH_S[mo]; }
function qName(q){ return isKo()?(q+'분기'):('Q'+q); }
function qNameFull(q){ const r={1:['1~3월','Jan-Mar'],2:['4~6월','Apr-Jun'],3:['7~9월','Jul-Sep'],4:['10~12월','Oct-Dec']}; return qName(q)+' ('+(isKo()?r[q][0]:r[q][1])+')'; }
function wName(n){ return isKo()?(n+'주차'):('Week '+n); }
function getGlobalWeek(d){
  // Week 1 = week (Sun-Sat) containing Jan 1
  const jan1=new Date(d.getFullYear(),0,1);
  const jan1sun=new Date(jan1); jan1sun.setDate(jan1.getDate()-jan1.getDay());
  return Math.floor((d-jan1sun)/604800000)+1;
}
function wGlobalName(d){ const w=getGlobalWeek(d); return isKo()?('W'+w+'주'):('W'+String(w).padStart(2,'0')); }
function dowName(d){ return isKo()?(DOW_KO[d]||d):d; }
function yName(y){ return isKo()?(y+'년'):String(y); }
function ymName(yr,mo){ return isKo()?(yr+'년 '+KO_MONTH[mo]):(EN_MONTH_S[mo]+' '+yr); }

// ──── CURRENCY ─────────────────────────────────────────────────────
function getRate(yr,mo){ const k=yr+'.'+mo; if(activeCurrency==='KRW')return KRW_RATES[k]||1400; if(activeCurrency==='SGD')return SGD_RATES[k]||1.34; return 1; }
function fmtAgg(usd,kr,sgd){
  if(activeCurrency==='KRW')return '₩'+Math.round(usd*(kr||1400)).toLocaleString('en-US');
  if(activeCurrency==='SGD')return 'S$'+(usd*(sgd||1.34)).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g,',');
  return '$'+Math.round(usd).toLocaleString('en-US');
}
const fmtN=n=>Math.round(n||0).toLocaleString('en-US');
const fmtRoas=n=>((n||0)*100).toFixed(0)+'%';
const fmtAcos=n=>Math.round(n||0).toString();
const toN=v=>{if(v===''||v==null)return 0;const n=parseFloat(String(v).replace(/[$,₩S%x]/g,''));return isNaN(n)?0:n;};

// ──── DATEPICKER ───────────────────────────────────────────────────
const _dp={};
const _dpMN=['January','February','March','April','May','June','July','August','September','October','November','December'];
function dpHtml(id,val){const v=val||'';return '<div class="dp-wrap" id="dpw-'+id+'"><input type="hidden" id="'+id+'" value="'+v+'"><div class="dp-btn" id="dpb-'+id+'" onclick="dpOpen(\''+id+'\')">'+( v||'—')+'</div><div class="dp-popup" id="dpp-'+id+'" style="display:none"><div class="dp-nav"><button class="dp-nav-btn" onclick="event.stopPropagation();dpNav(\''+id+'\',-1)">‹</button><span class="dp-nav-lbl" id="dpt-'+id+'"></span><button class="dp-nav-btn" onclick="event.stopPropagation();dpNav(\''+id+'\',1)">›</button></div><div class="dp-dow"><span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span></div><div class="dp-grid" id="dpg-'+id+'"></div></div></div>';}
function dpInit(id,val){const d=val?new Date(val+'T00:00:00'):new Date();_dp[id]={y:d.getFullYear(),m:d.getMonth(),sel:val||null};dpRender(id);}
function dpOpen(id){const pp=document.getElementById('dpp-'+id);const isOpen=pp&&pp.style.display!=='none';document.querySelectorAll('.dp-popup').forEach(p=>p.style.display='none');if(!isOpen&&pp){if(!_dp[id]){const v=document.getElementById(id).value;dpInit(id,v||null);}dpRender(id);pp.style.display='block';}}
function dpNav(id,dir){const s=_dp[id];s.m+=dir;if(s.m>11){s.m=0;s.y++;}else if(s.m<0){s.m=11;s.y--;}dpRender(id);}
function dpRender(id){const s=_dp[id];if(!s)return;const el=document.getElementById('dpt-'+id);if(!el)return;el.textContent=_dpMN[s.m]+' '+s.y;const first=new Date(s.y,s.m,1).getDay();const days=new Date(s.y,s.m+1,0).getDate();const today=new Date();let h='';for(let i=0;i<first;i++)h+='<div class="dp-day dp-empty"></div>';for(let d=1;d<=days;d++){const ds=s.y+'-'+String(s.m+1).padStart(2,'0')+'-'+String(d).padStart(2,'0');const cls=(s.sel===ds?' dp-sel':'')+(today.getFullYear()===s.y&&today.getMonth()===s.m&&today.getDate()===d?' dp-today':'');h+='<div class="dp-day'+cls+'" onclick="event.stopPropagation();dpSelect(\''+id+'\',\''+ds+'\')">'+(d)+'</div>';}document.getElementById('dpg-'+id).innerHTML=h;}
function dpSelect(id,ds){if(!_dp[id])return;_dp[id].sel=ds;const hi=document.getElementById(id);if(hi)hi.value=ds;const bt=document.getElementById('dpb-'+id);if(bt)bt.textContent=ds;const pp=document.getElementById('dpp-'+id);if(pp)pp.style.display='none';dpRender(id);}
function dpSetVal(id,val){const _nat=document.getElementById(id);if(_nat&&_nat.tagName==='INPUT'&&_nat.type==='date'){_nat.value=val||'';return;}if(!document.getElementById('dpw-'+id))return;if(!_dp[id])dpInit(id,val);_dp[id].sel=val;if(val){const d=new Date(val+'T00:00:00');_dp[id].y=d.getFullYear();_dp[id].m=d.getMonth();}const hi=document.getElementById(id);if(hi)hi.value=val||'';const bt=document.getElementById('dpb-'+id);if(bt)bt.textContent=val||'—';dpRender(id);}
document.addEventListener('click',()=>document.querySelectorAll('.dp-popup').forEach(p=>p.style.display='none'));

// ──── HELPERS ──────────────────────────────────────────────────────
function isConfirmed(yr,mo){ const now=new Date(); const end=new Date(yr,mo,0); return (now-end)/86400000>2; }
// Vine order adjustment map (built once)
let VINE_ORDER_MAP=null;function getVineOrderMap(){if(!VINE_ORDER_MAP){VINE_ORDER_MAP={};VINE_ITEMS.forEach(v=>{const k=v.yr+'_'+v.mo+'_'+v.day;VINE_ORDER_MAP[k]=(VINE_ORDER_MAP[k]||0)+(v.orders_adj||0);});}return VINE_ORDER_MAP;}
function agg(rows){
  const v=vineMode==='exclude';
  return rows.reduce((a,r)=>{
    const vk=r.yr+'_'+r.mo+'_'+r.day;
    const vOrd=v?(getVineOrderMap()[vk]||0):0;
    return {
      sales:a.sales+r.sales+(v?(r.vine_adj||0):0), organic:a.organic+r.organic+(v?(r.vine_adj||0):0),
      adSpend:a.adSpend+r.adSpend, adSales:a.adSales+r.adSales,
      orders:a.orders+r.orders+vOrd, items:a.items+r.items+vOrd,
      impr:a.impr+(r.impr||0), clicks:a.clicks+(r.clicks||0), adOrders:a.adOrders+(r.adOrders||0),
      sessions:a.sessions+r.sessions, rawSales:a.rawSales+r.sales, vineTotal:a.vineTotal+(r.vine_adj||0),
      kr:a.kr+(r.salesKRW>0&&r.sales>0?r.salesKRW/r.sales:0), krN:a.krN+(r.salesKRW>0&&r.sales>0?1:0),
    };
  },{sales:0,organic:0,adSpend:0,adSales:0,orders:0,items:0,impr:0,clicks:0,adOrders:0,sessions:0,rawSales:0,vineTotal:0,kr:0,krN:0});
}
function emptyT(){ return {sales:0,organic:0,adSpend:0,adSales:0,orders:0,items:0,impr:0,clicks:0,adOrders:0,sessions:0,rawSales:0,vineTotal:0,kr:0,krN:0}; }
function avgRate(a){ return {krw:a.krN>0?a.kr/a.krN:1400, sgd:1.34}; }
function chg(c,p,inv){
  if(p==null||p===0||(c===0&&p===0))return{cls:'neutral',txt:'—'};
  const vv=(c-p)/Math.abs(p)*100, up=vv>=0, good=inv?!up:up;
  return{cls:good?'up':'down',txt:(up?'▲ ':'▼ ')+Math.abs(vv).toFixed(1)+'% '+T('vsPrev')};
}
// global range filter (item 1)
function inRange(d){
  if(!rangeFrom&&!rangeTo)return true;
  const dd=new Date(d.yr,d.mo-1,d.day);
  // T00:00:00 강제 → 로컬 자정으로 파싱 (UTC 파싱 시 timezone 오차 방지)
  if(rangeFrom&&dd<new Date(rangeFrom+'T00:00:00'))return false;
  if(rangeTo&&dd>new Date(rangeTo+'T00:00:00'))return false;
  return true;
}
function rangedData(){ return allData.filter(inRange); }

// ──── FILE UPLOAD ──────────────────────────────────────────────────
const dropZone=document.getElementById('drop-zone'), fileInput=document.getElementById('file-input');
dropZone.addEventListener('dragover',e=>{e.preventDefault();dropZone.classList.add('drag-over')});
dropZone.addEventListener('dragleave',()=>dropZone.classList.remove('drag-over'));
dropZone.addEventListener('drop',e=>{e.preventDefault();dropZone.classList.remove('drag-over');const f=e.dataTransfer.files[0];if(f)processFile(f)});
fileInput.addEventListener('change',e=>{const f=e.target.files[0];if(f)processFile(f)});
function processFile(file){
  showLoading(true);
  const reader=new FileReader();
  reader.onload=e=>{
    try{
      const wb=XLSX.read(e.target.result,{type:'array',cellDates:true});
      const sName=wb.SheetNames.find(n=>n.includes('Daily'))||wb.SheetNames[0];
      const rows=XLSX.utils.sheet_to_json(wb.Sheets[sName],{header:1,defval:''});
      parseRows(rows);
    }catch(err){alert('Error: '+err.message)}
    showLoading(false);
  };
  reader.readAsArrayBuffer(file);
}
function loadPreloaded(){ allData=PRELOADED; buildByMonth(); showDash(); }
function parseRows(rows){
  const newData=[];
  const vm={}; VINE_ITEMS.forEach(v=>{const k=v.yr+'_'+v.mo+'_'+v.day;vm[k]=(vm[k]||0)+(v.adj||0)});
  for(let i=2;i<rows.length;i++){
    const r=rows[i];if(!r||!r.length)continue;const b=r[1];if(!(b instanceof Date))continue;
    const yr=b.getFullYear(),mo=b.getMonth()+1,day=b.getDate();
    const dow=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][b.getDay()];
    newData.push({yr,mo,day,dow,sales:toN(r[3]),salesKRW:toN(r[4]),orders:toN(r[5]),items:toN(r[6]),sessions:toN(r[7]),adSpend:toN(r[12]),adSales:toN(r[13]),organic:toN(r[14]),vine_adj:vm[yr+'_'+mo+'_'+day]||0});
  }
  if(!newData.length){alert(T('noData'));return;}
  // Merge with existing stored data
  allData = mergeData(loadFromStorage().length ? loadFromStorage() : PRELOADED, newData);
  saveToStorage(allData);
  buildByMonth(); showDash();
  alert(isKo()?`✅ 병합 완료 (총 ${allData.length}일 데이터)`:`✅ Merged (${allData.length} days total)`);
}
// ──── DATA PERSISTENCE (localStorage) ────────────────────────────────
const LS_KEY = 'jb_sales_v1';
function saveToStorage(data) {
  try { localStorage.setItem(LS_KEY, JSON.stringify(data)); } catch(e) { console.warn('Storage full:', e); }
}
function loadFromStorage() {
  try { return JSON.parse(localStorage.getItem(LS_KEY) || '[]'); } catch(e) { return []; }
}
function clearStorage() { localStorage.removeItem(LS_KEY); }

// California (Pacific) 기준 오늘 날짜 반환
function getCaToday() {
  const s = new Date().toLocaleDateString('en-CA', {timeZone:'America/Los_Angeles'}); // YYYY-MM-DD
  return new Date(s + 'T00:00:00');
}

function mergeData(existing, incoming) {
  const map = new Map(existing.map(d=>[d.yr+'_'+d.mo+'_'+d.day, d]));

  // 캘리포니아 기준 오늘 - 8일 = 이 날짜 이전은 확정 데이터 → 업데이트 안 함
  // (광고 전환 데이터는 클릭 후 7일간 추적되므로 8일 이전은 settled)
  const caToday  = getCaToday();
  const cutoff   = new Date(caToday);
  cutoff.setDate(cutoff.getDate() - 8);

  incoming.forEach(d => {
    const k       = d.yr+'_'+d.mo+'_'+d.day;
    const rowDate = new Date(d.yr, d.mo-1, d.day);
    const ex      = map.get(k);

    if(ex) {
      // 8일보다 오래된 기존 데이터는 변경하지 않음 (confirmed)
      if(rowDate < cutoff) return;

      if(d._adOnly) {
        // Sponsored Products 광고 데이터 → 광고 지표만 업데이트, 매출 보존
        const merged = {...ex,
          adSpend: Math.round((d.adSpend||0) * 100) / 100,
          adSales: Math.round((d.adSales||0) * 100) / 100,
          impr:    d.impr||0, clicks: d.clicks||0, adOrders: d.adOrders||0,
          organic: Math.max(0, (ex.sales||0) - (d.adSales||0)),
        };
        map.set(k, merged);
        return;
      }

      const merged = {...d};
      // 0으로 들어오는 값은 기존 값 보존 (Business Report에 광고/노출 데이터 없음)
      ['adSpend','adSales','salesKRW','vine_adj','impr','clicks','adOrders'].forEach(f => {
        if(!(merged[f]>0) && ex[f]>0) merged[f] = ex[f];
      });
      if(!d.adSales && ex.adSales > 0) {
        merged.adSales = ex.adSales;
        merged.adSpend = ex.adSpend;
        merged.organic = Math.max(0, d.sales - ex.adSales);
      }
      map.set(k, merged);
    } else {
      // 신규 날짜 - ad-only면 adSpend/adSales만 있는 빈 행 추가 (나중에 Business Report로 채워짐)
      if(!d._adOnly) map.set(k, d);
    }
  });

  return Array.from(map.values()).sort((a,b)=>new Date(a.yr,a.mo-1,a.day)-new Date(b.yr,b.mo-1,b.day));
}

function exportBackup() {
  const data = JSON.stringify({version:'jb_v1', exportDate:new Date().toISOString(), data:allData}, null, 2);
  const blob = new Blob([data], {type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'jb_dashboard_backup_'+new Date().toISOString().slice(0,10)+'.json';
  a.click();
  URL.revokeObjectURL(a.href);
}

function importBackupFile(file) {
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const obj = JSON.parse(e.target.result);
      const data = obj.data || obj; // support both wrapped and raw
      if(!Array.isArray(data)) throw new Error('Invalid format');
      allData = mergeData(allData, data);
      saveToStorage(allData);
      buildByMonth(); render();
      alert(isKo()?`✅ 백업 복원 완료 (${allData.length}일)`:`✅ Restored (${allData.length} days)`);
    } catch(err) { alert('Backup import failed: '+err.message); }
  };
  reader.readAsText(file);
}

function buildByMonth(){
  byMonth={};
  allData.forEach(d=>{const k=d.yr+'.'+d.mo;if(!byMonth[k])byMonth[k]={yr:d.yr,mo:d.mo,rows:[]};byMonth[k].rows.push(d)});
  // 현재 달(캘리포니아 기준) 자동 추가 — 데이터 없어도 탭 생성
  const _caNow=new Date(new Date().toLocaleDateString('en-CA',{timeZone:'America/Los_Angeles'}));
  const _cyk=_caNow.getFullYear()+'.'+(_caNow.getMonth()+1);
  if(!byMonth[_cyk]) byMonth[_cyk]={yr:_caNow.getFullYear(),mo:_caNow.getMonth()+1,rows:[]};
  monthKeys=Object.keys(byMonth).sort((a,b)=>{const[ay,am]=a.split('.').map(Number),[by,bm]=b.split('.').map(Number);return ay!==by?ay-by:am-bm});
  activeMonth=monthKeys[monthKeys.length-1];
  const years=[...new Set(allData.map(d=>d.yr))].sort();
  activeYear=years[years.length-1];
  const lastMo=byMonth[activeMonth].mo; activeQuarter=Math.ceil(lastMo/3);
  // default range = full
  const s=allData.slice().sort((a,b)=>new Date(a.yr,a.mo-1,a.day)-new Date(b.yr,b.mo-1,b.day));
  rangeFrom=`${s[0].yr}-${String(s[0].mo).padStart(2,'0')}-${String(s[0].day).padStart(2,'0')}`;
  const l=s[s.length-1]; rangeTo=`${l.yr}-${String(l.mo).padStart(2,'0')}-${String(l.day).padStart(2,'0')}`;
}
function showDash(){
  document.getElementById('upload-screen').style.display='none';
  document.getElementById('dashboard').style.display='block';
  applyI18nStatic(); render();
}

// ──── STATIC i18n ──────────────────────────────────────────────────
function applyI18nStatic(){
  document.documentElement.lang=isKo()?'ko':'en';
  // tab group
  document.getElementById('mode-toggle').innerHTML=[['sales',T('salesMode')],['ads',T('adsMode')]].map(([m,lb])=>
    `<button class="mode-btn ${m===appMode?'active':''}" onclick="setMode('${m}')">${lb}</button>`).join('');
  const _tabs = appMode==='sales' ? ['annual','quarter','monthly','weekly','daily'] : ADS_TABS;
  document.getElementById('tab-group').innerHTML=_tabs.map(t=>
    `<button class="tab-btn ${t===activeTab?'active':''}" onclick="setTab('${t}')">${T(t)}</button>`).join('');
  document.getElementById('vine-inc').textContent=T('vineInc');
  document.getElementById('vine-exc').textContent=T('vineExc');
  document.getElementById('vine-inc').classList.toggle('active',vineMode==='include');
  document.getElementById('vine-exc').classList.toggle('active',vineMode==='exclude');
  document.getElementById('reset-btn').textContent=T('newFile');
  const dsb=document.getElementById('drive-sync-btn');
  if(dsb) dsb.textContent=isKo()?'동기화':'Sync';

  document.getElementById('rng-lbl').textContent=T('period');
  document.getElementById('rng-apply').textContent=T('apply');
  document.getElementById('rng-reset').textContent=T('reset');
  document.getElementById('ct-bar').textContent=T('bar');
  document.getElementById('ct-line').textContent=T('line');
  document.getElementById('ct-mix').textContent=T('mix');
  document.getElementById('donut-title').textContent=T('adVsOrg');
  dpSetVal('rng-from',rangeFrom); dpSetVal('rng-to',rangeTo);
  // upload screen
  document.getElementById('upl-sub').textContent=T('uplSub');
  document.getElementById('upl-btn').textContent=T('uplBtn');
  document.getElementById('upl-div').textContent=T('uplDiv');
  document.getElementById('upl-h3').textContent=T('uplH3');
  document.getElementById('upl-p').textContent=T('uplP');
  const uplNote=document.getElementById('upl-note'); if(uplNote) uplNote.textContent=T('uplNote');
  const restoreBtn=document.getElementById('restore-btn'); if(restoreBtn) restoreBtn.textContent=T('restore');
  const folderBtn=document.getElementById('folder-btn'); if(folderBtn) folderBtn.textContent='📁 '+T('folderScan');
}

// ──── NAVBAR (item 1+6) ────────────────────────────────────────────
function buildNavbar(){
  const ut=document.getElementById('unit-tabs');
  const yt=document.getElementById('year-tabs');
  const allYears=[...new Set(allData.map(d=>d.yr))].sort();
  let tabs=[];

  if(activeTab==='annual'){
    // year selector = unit tabs + 시뮬레이션 버튼
    if(yt)yt.innerHTML='';
    tabs=allYears.map(y=>({k:y,label:yName(y),active:y===activeYear&&!simMode,fn:`selectYear(${y})`}));
    tabs.push({k:'sim',label:activeYear+'(E)',active:simMode,fn:'enterSimMode()'});
  } else if(activeTab==='quarter'){
    // year selector in year-tabs
    if(yt)yt.innerHTML=allYears.map(y=>`<button class="year-tab ${y===activeYear?'active':''}" onclick="selectYear(${y})">${y}</button>`).join('');
    tabs=[1,2,3,4].map(q=>({k:q,label:qName(q),active:q===activeQuarter,fn:`selectQuarter(${q})`}));
  } else { // monthly, weekly, daily — 연도 탭 + 월 탭
    if(yt)yt.innerHTML=allYears.map(y=>`<button class="year-tab ${y===activeYear?'active':''}" onclick="selectYear(${y})">${y}</button>`).join('');
    const ym=monthKeys.filter(k=>byMonth[k].yr===activeYear);
    tabs=ym.map(k=>({k,label:mNameS(byMonth[k].mo),active:k===activeMonth,fn:`selectMonthTab('${k}')`}));
  }
  ut.innerHTML=tabs.map(t=>`<button class="unit-tab ${t.active?'active':''}" onclick="${t.fn}">${t.label}</button>`).join('');
  ut._tabs=tabs;
}
function selectYear(y){
  simMode=false;
  activeYear=y;
  const ym=monthKeys.filter(k=>byMonth[k].yr===y);
  if(ym.length){
    if(activeTab==='annual'||activeTab==='quarter'){
      _syncRangeToYear(y);
    } else {
      activeMonth=ym[ym.length-1];
      activeQuarter=Math.ceil(byMonth[activeMonth].mo/3);
      if(activeTab==='weekly') _syncRangeToYear(y);
      else if(activeTab==='daily') _syncRangeToMonth(activeMonth);
    }
  }
  render();
}
function selectQuarter(q){ activeQuarter=q; render(); }
function selectMonth(k){ activeMonth=k; activeWeekIdx=null; render(); }
function selectMonthTab(k){
  activeMonth=k; activeWeekIdx=null;
  // monthly: chart shows all months — no range sync needed
  if(activeTab==='weekly'||activeTab==='daily') _syncRangeToMonth(k);
  render();
}
function _syncRangeToMonth(k){
  const m=byMonth[k]; if(!m) return;
  const dim=new Date(m.yr,m.mo,0).getDate();
  rangeFrom=`${m.yr}-${String(m.mo).padStart(2,'0')}-01`;
  rangeTo=`${m.yr}-${String(m.mo).padStart(2,'0')}-${String(dim).padStart(2,'0')}`;
  dpSetVal('rng-from',rangeFrom); dpSetVal('rng-to',rangeTo);
}
function applyRange(){ rangeFrom=document.getElementById('rng-from').value; rangeTo=document.getElementById('rng-to').value; render(); }
function resetRange(){
  const s=allData.slice().sort((a,b)=>new Date(a.yr,a.mo-1,a.day)-new Date(b.yr,b.mo-1,b.day));
  rangeFrom=`${s[0].yr}-${String(s[0].mo).padStart(2,'0')}-${String(s[0].day).padStart(2,'0')}`;
  const l=s[s.length-1]; rangeTo=`${l.yr}-${String(l.mo).padStart(2,'0')}-${String(l.day).padStart(2,'0')}`;
  dpSetVal('rng-from',rangeFrom); dpSetVal('rng-to',rangeTo);
  render();
}

// ──── CONTROLS ─────────────────────────────────────────────────────
function setMode(m){ appMode=m; activeTab=m==='sales'?'weekly':'overview'; if(m==='sales') _syncRangeToYear(activeYear); applyI18nStatic(); render(); }
function setTab(t){
  simMode=false;
  activeTab=t;
  if(t==='weekly'&&activeMonth==='all'){activeMonth=monthKeys[monthKeys.length-1];}
  if(t==='weekly') _syncRangeToYear(activeYear);
  if(t==='daily') _syncRangeToMonth(activeMonth);
  if(t==='annual'||t==='quarter') _syncRangeToYear(activeYear);
  applyI18nStatic(); render();
}
function _syncRangeToYear(yr){
  const ym=monthKeys.filter(k=>byMonth[k].yr===yr);
  if(!ym.length)return;
  const first=byMonth[ym[0]], last=byMonth[ym[ym.length-1]];
  const ldim=new Date(last.yr,last.mo,0).getDate();
  rangeFrom=`${first.yr}-${String(first.mo).padStart(2,'0')}-01`;
  rangeTo=`${last.yr}-${String(last.mo).padStart(2,'0')}-${String(ldim).padStart(2,'0')}`;
  dpSetVal('rng-from',rangeFrom); dpSetVal('rng-to',rangeTo);
}
function setCurrency(c,btn){ activeCurrency=c; document.querySelectorAll('.cur-btn').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); applyI18nStatic(); render(); }
function setVineMode(m){ vineMode=m; document.getElementById('vine-inc').classList.toggle('active',m==='include'); document.getElementById('vine-exc').classList.toggle('active',m==='exclude'); render(); }
function setChartType(t){ chartType=t; document.getElementById('ct-bar').classList.toggle('active',t==='bar'); document.getElementById('ct-line').classList.toggle('active',t==='line'); document.getElementById('ct-mix').classList.toggle('active',t==='mix'); render(); }

// ──── AI REVIEW GENERATION ─────────────────────────────────────────
let _jbApiKey=localStorage.getItem('jb_api_key')||'';
function _getApiKey(){
  if(!_jbApiKey){
    _jbApiKey=prompt(isKo()?'Anthropic API 키를 입력하세요 (로컬 저장):':'Enter your Anthropic API key (stored locally):');
    if(_jbApiKey)localStorage.setItem('jb_api_key',_jbApiKey);
  }
  return _jbApiKey;
}
async function _callClaude(prompt, _retry=0){
  const key=_getApiKey(); if(!key)return null;
  try{
    const res=await fetch('https://api.anthropic.com/v1/messages',{
      method:'POST',
      headers:{'Content-Type':'application/json','x-api-key':key,'anthropic-version':'2023-06-01','anthropic-dangerous-direct-browser-access':'true'},
      body:JSON.stringify({model:'claude-haiku-4-5',max_tokens:900,messages:[{role:'user',content:prompt}]})
    });
    if(!res.ok){
      const e=await res.json().catch(()=>({}));
      if(res.status===401){localStorage.removeItem('jb_api_key');_jbApiKey='';alert('API 키 오류. 다시 입력해주세요.');return null;}
      // 429(rate limit) / 529(overloaded): 최대 3회 자동 재시도
      if((res.status===429||res.status===529)&&_retry<3){
        const wait=[8000,20000,40000][_retry];
        console.warn(`Claude API ${res.status} — ${wait/1000}초 후 재시도 (${_retry+1}/3)`);
        await new Promise(r=>setTimeout(r,wait));
        return _callClaude(prompt,_retry+1);
      }
      const msg=e.error?.message||('HTTP '+res.status);
      alert(isKo()?`API 오류: ${msg}\n\n요청이 너무 많거나 서버가 바쁩니다. 잠시 후 다시 시도해 주세요.`:`API error: ${msg}\n\nToo many requests or server busy. Please try again later.`);
      return null;
    }
    return (await res.json()).content[0].text;
  }catch(e){alert('API 호출 실패: '+e.message);return null;}
}
function _monthlyPrompt(yr,mo,cT,prevCT){
  const roas=cT.adSpend>0?(cT.sales/cT.adSpend).toFixed(2):'0';
  const acos=cT.sales>0?(cT.adSpend/cT.sales*100).toFixed(1):'0';
  const org=cT.sales>0?(cT.organic/cT.sales*100).toFixed(1):'0';
  const aov=cT.orders>0?(cT.sales/cT.orders).toFixed(2):'0';
  const prev=prevCT?`이전달 매출 $${prevCT.sales.toFixed(0)}, ROAS ${prevCT.adSpend>0?(prevCT.sales/prevCT.adSpend).toFixed(2):'N/A'}x`:'데이터 없음';
  return `당신은 Amazon 셀러(JungBeauty, 뷰티/스킨케어)의 월간 실적을 분석하는 전문가입니다.
아래 지표를 바탕으로 월간 세일즈 리뷰를 HTML 형식(<p> 태그 사용)으로 작성하세요.

기간: ${yr}년 ${mo}월
- 총 매출: $${cT.sales.toFixed(0)}
- 광고 매출: $${cT.adSales.toFixed(0)} / 오가닉: $${cT.organic.toFixed(0)} (${org}%)
- 광고비: $${cT.adSpend.toFixed(0)}
- Total ROAS: ${roas}x | Total ACoS: ${acos}%
- 오더 수: ${cT.orders} | 평균 주문금액: $${aov}
- ${prev}

4~5개 bullet point를 <p> 태그로 작성하고, 핵심 수치는 <strong>으로 강조, 이모지 활용.
항목: 전체 성과, 광고 효율, 오가닉 성장, 주목할 패턴, 다음달 액션 플랜.
구체적 수치 포함, 실행 가능한 인사이트 중심. 최대 280단어.`;
}
function _weeklyPrompt(week,prevWeek){
  const t=week.t;
  const roas=t.adSpend>0?(t.sales/t.adSpend).toFixed(2):'0';
  const acos=t.sales>0?(t.adSpend/t.sales*100).toFixed(1):'0';
  const org=t.sales>0?(t.organic/t.sales*100).toFixed(1):'0';
  const wow=prevWeek&&prevWeek.t.sales>0?((t.sales-prevWeek.t.sales)/prevWeek.t.sales*100).toFixed(1):null;
  const prev=prevWeek?`직전주 매출 $${prevWeek.t.sales.toFixed(0)}, 오더 ${prevWeek.t.orders}건`:'첫 주차';
  return `당신은 Amazon 셀러(JungBeauty, 뷰티/스킨케어)의 주간 실적을 분석하는 전문가입니다.
아래 지표를 바탕으로 주간 세일즈 리뷰를 HTML 형식(<p> 태그 사용)으로 작성하세요.

기간: ${week.label}
- 총 매출: $${t.sales.toFixed(0)}${wow?` (전주 대비 ${wow>0?'+':''}${wow}%)`:''}
- 광고 매출: $${t.adSales.toFixed(0)} / 오가닉: $${t.organic.toFixed(0)} (${org}%)
- 광고비: $${t.adSpend.toFixed(0)}
- Total ROAS: ${roas}x | Total ACoS: ${acos}%
- 오더 수: ${t.orders}
- ${prev}

3~4개 bullet point를 <p> 태그로 작성하고, 핵심 수치는 <strong>으로 강조, 이모지 활용.
항목: 주간 성과 요약, 광고 효율 평가, 특이사항 또는 개선점.
구체적 수치 포함. 최대 220단어.`;
}
async function triggerAIGenerate(id){
  const btn=document.getElementById('ai-btn-'+id);
  if(btn){btn.disabled=true;btn.textContent='⏳ '+(isKo()?'생성 중…':'Generating…');}
  try{
    if(id.startsWith('mo_')){
      const[,yr,mo]=id.split('_');
      const k=yr+'.'+mo; const m=byMonth[k]; if(!m)return;
      const cT=m.rows.length?agg(m.rows):emptyT();
      const ym=monthKeys.filter(x=>byMonth[x].yr===parseInt(yr));
      const idx=ym.findIndex(x=>byMonth[x].mo===parseInt(mo));
      const prevCT=idx>0?agg(byMonth[ym[idx-1]].rows):null;
      const result=await _callClaude(_monthlyPrompt(parseInt(yr),parseInt(mo),cT,prevCT));
      if(result){
        const ts=new Date().toLocaleDateString(isKo()?'ko-KR':'en-US');
        const html=result+`<div style="font-size:10px;color:var(--muted);margin-top:8px">🤖 AI Generated · ${ts}</div>`;
        localStorage.setItem('ai_review_'+id,html);
        const el=document.getElementById('ai-comm-'+id); if(el)el.innerHTML=html;
        const hdr=document.querySelector(`#ai-btn-${id}`)?.closest('.review-card')?.querySelector('.review-header-title');
        if(hdr&&!hdr.querySelector('.ai-tag')){const t=document.createElement('span');t.className='ai-tag';t.style.cssText='font-size:9px;background:rgba(99,102,241,.15);color:#6366f1;padding:2px 6px;border-radius:10px;margin-left:6px';t.textContent='🤖 AI';hdr.appendChild(t);}
      }
    } else if(id.startsWith('wk_')){
      const wKey=id.slice(3);
      const weeks=getAllWeeks(rangedData());
      const week=weeks.find(w=>_weekKey(w)===wKey)||weeks[weeks.length-1];
      if(!week)return;
      const wIdx=weeks.indexOf(week);
      const result=await _callClaude(_weeklyPrompt(week,wIdx>0?weeks[wIdx-1]:null));
      if(result){
        const ts=new Date().toLocaleDateString(isKo()?'ko-KR':'en-US');
        const html=result+`<div style="font-size:10px;color:var(--muted);margin-top:8px">🤖 AI Generated · ${ts}</div>`;
        localStorage.setItem('ai_review_'+id,html);
        const el=document.getElementById('ai-comm-'+id); if(el)el.innerHTML=html;
      }
    }
  }finally{
    if(btn){btn.disabled=false;btn.textContent='🤖 '+(isKo()?'AI 재생성':'AI Re-gen');}
  }
}

// ──── ANNUAL SIMULATION ────────────────────────────────────────────
let simMode=false, simData={};

function enterSimMode(){
  simMode=true;
  if(!Object.keys(simData).length){
    const saved=localStorage.getItem('jb_sim_2026');
    if(saved){try{simData=JSON.parse(saved);}catch(e){initSimData();}}
    else initSimData();
  }
  _refreshSimData();
  render();
}
function exitSimMode(){ simMode=false; render(); }
function resetSimData(){ initSimData(); _refreshSimData(); renderSimulation(); }

// localStorage 로드 후 당월 partial data 반영 + trendPredicted 재계산
function _refreshSimData(){
  const yr=activeYear;
  // 1) 당월 진행중 월: calcProjSales 로 입력값 보정 (사용자 편집 미보존 — 최신 데이터 우선)
  Object.keys(simData).forEach(key=>{
    const d=simData[key];
    if(d.locked||d.yr!==yr) return;
    const bmKey=`${d.yr}.${d.mo}`;
    if(!byMonth[bmKey]||!byMonth[bmKey].rows.length) return;
    const pt=agg(byMonth[bmKey].rows);
    const prows=byMonth[bmKey].rows.slice().sort((a,b)=>a.day-b.day);
    const dim=new Date(d.yr,d.mo,0).getDate();
    const projSales=calcProjSales(pt.sales,prows,d.yr,d.mo,dim);
    const projAdSpend=pt.adSpend>0?pt.adSpend/prows.length*dim:d.adSpend;
    simData[key].adSpend=Math.round(projAdSpend);
    simData[key].roas=parseFloat((projAdSpend>0?projSales/projAdSpend*100:d.roas).toFixed(0));
    simData[key].orgPct=parseFloat((pt.sales>0?pt.organic/pt.sales*100:d.orgPct).toFixed(1));
  });
  // 2) trendPredicted 재계산 (localStorage에 없을 수 있음)
  const ymKeys=monthKeys.filter(k=>byMonth[k].yr===yr);
  const confirmed=ymKeys.filter(k=>isConfirmed(byMonth[k].yr,byMonth[k].mo));
  const lastConfMo=confirmed.length>0?byMonth[confirmed[confirmed.length-1]].mo:3;
  const recent=confirmed.slice(-3);
  let sumA=0,sumR=0,cnt=0,salesArr=[];
  recent.forEach(k=>{const t=agg(byMonth[k].rows);if(t.adSpend>0){sumA+=t.adSpend;sumR+=t.adSpend>0?t.sales/t.adSpend*100:130;cnt++;salesArr.push(t.sales);}});
  const avgA=cnt>0?sumA/cnt:300, avgR=cnt>0?sumR/cnt:130;
  let gr=[];
  for(let i=1;i<salesArr.length;i++) if(salesArr[i-1]>0) gr.push((salesArr[i]-salesArr[i-1])/salesArr[i-1]*100);
  const avgG=gr.length?Math.max(-10,Math.min(20,gr.reduce((a,b)=>a+b,0)/gr.length)):5;
  Object.keys(simData).forEach(k=>{
    const d=simData[k];
    if(d.yr!==yr) return;
    simData[k].trendPredicted=Math.round(avgA*Math.pow(1+avgG/200,d.mo-lastConfMo)*avgR/100);
  });
}

function initSimData(){
  simData={};
  const yr=activeYear;
  const ymKeys=monthKeys.filter(k=>byMonth[k].yr===yr);
  const confirmed=ymKeys.filter(k=>isConfirmed(byMonth[k].yr,byMonth[k].mo));

  // 최근 3개 확정 월 평균 (추이 기반 pre-fill용)
  const recent=confirmed.slice(-3);
  let sumAdSpend=0,sumOrgPct=0,sumRoas=0,cnt=0;
  let salesArr=[];
  recent.forEach(k=>{const t=agg(byMonth[k].rows);if(t.adSpend>0){sumAdSpend+=t.adSpend;sumOrgPct+=t.sales>0?t.organic/t.sales*100:35;sumRoas+=t.adSpend>0?t.sales/t.adSpend*100:130;cnt++;salesArr.push(t.sales);}});
  const avgAdSpend=cnt>0?sumAdSpend/cnt:300;
  const avgOrgPct=cnt>0?sumOrgPct/cnt:35;
  const avgRoas=cnt>0?sumRoas/cnt:130;

  // MoM 성장률 (최근 데이터 기준)
  let growthRates=[];
  for(let i=1;i<salesArr.length;i++) if(salesArr[i-1]>0) growthRates.push((salesArr[i]-salesArr[i-1])/salesArr[i-1]*100);
  const avgGrowth=growthRates.length?Math.max(-10,Math.min(20,growthRates.reduce((a,b)=>a+b,0)/growthRates.length)):5;

  const lastConfMo=confirmed.length>0?byMonth[confirmed[confirmed.length-1]].mo:3;

  // 1~12월 전체 (단, 데이터 없는 1월은 건너뜀)
  const startMo=ymKeys.length>0?byMonth[ymKeys[0]].mo:2;
  for(let mo=startMo;mo<=12;mo++){
    const key=`sim_${yr}_${mo}`;
    const bmKey=`${yr}.${mo}`;
    const conf=isConfirmed(yr,mo);
    if(conf&&byMonth[bmKey]){
      const t=agg(byMonth[bmKey].rows);
      simData[key]={mo,yr,locked:true,adSpend:parseFloat(t.adSpend.toFixed(0)),orgPct:t.sales>0?parseFloat((t.organic/t.sales*100).toFixed(1)):parseFloat(avgOrgPct.toFixed(1)),roas:t.adSpend>0?parseFloat((t.sales/t.adSpend*100).toFixed(0)):parseFloat(avgRoas.toFixed(0)),actual:{totalSales:t.sales,adSales:t.adSales,organic:t.organic,adSpend:t.adSpend,orders:t.orders}};
    } else {
      const ahead=Math.max(0,mo-lastConfMo);
      let projAdSpend=avgAdSpend*Math.pow(1+avgGrowth/200,ahead);
      let projRoas=avgRoas, projOrgPct=avgOrgPct;
      // 당월(진행 중): calcProjSales 기반으로 입력값 보정
      if(byMonth[bmKey]&&byMonth[bmKey].rows.length>0){
        const pt=agg(byMonth[bmKey].rows);
        const prows=byMonth[bmKey].rows.slice().sort((a,b)=>a.day-b.day);
        const dim=new Date(yr,mo,0).getDate();
        const projSales=calcProjSales(pt.sales,prows,yr,mo,dim);
        if(pt.adSpend>0) projAdSpend=pt.adSpend/prows.length*dim;
        if(projAdSpend>0) projRoas=projSales/projAdSpend*100;
        if(pt.sales>0) projOrgPct=pt.organic/pt.sales*100;
      }
      simData[key]={mo,yr,locked:false,adSpend:Math.round(projAdSpend),orgPct:parseFloat(projOrgPct.toFixed(1)),roas:parseFloat(projRoas.toFixed(0))};
    }
  }
  // 트렌드 예측값 (전체 월 공통 — 확정 월의 실제 대비 비교용)
  Object.keys(simData).forEach(k=>{
    const d=simData[k];
    const trendAdSpend=avgAdSpend*Math.pow(1+avgGrowth/200,d.mo-lastConfMo);
    d.trendPredicted=Math.round(trendAdSpend*(avgRoas/100));
  });
}

function calcSim(key){
  const d=simData[key]; if(!d) return null;
  if(d.locked){
    const a=d.actual;
    const totalRoas=a.adSpend>0?a.totalSales/a.adSpend:0;
    const totalAcos=a.totalSales>0?a.adSpend/a.totalSales*100:0;
    const adRoas=a.adSpend>0?a.adSales/a.adSpend:0;
    const adAcos=a.adSales>0?a.adSpend/a.adSales*100:0;
    return {...a,totalRoas,totalAcos,adRoas,adAcos};
  }
  const totalSales=d.adSpend*(d.roas/100);
  const organic=totalSales*(d.orgPct/100);
  const adSales=totalSales-organic;
  const totalAcos=totalSales>0?d.adSpend/totalSales*100:0;
  const adRoas=d.adSpend>0?adSales/d.adSpend:0;
  const adAcos=adSales>0?d.adSpend/adSales*100:0;
  return {totalSales,adSales,organic,adSpend:d.adSpend,orders:0,totalRoas:d.roas/100,totalAcos,adRoas,adAcos};
}

function updateSim(key,field,val){
  if(!simData[key]||simData[key].locked) return;
  simData[key][field]=parseFloat(val)||0;
  localStorage.setItem('jb_sim_2026',JSON.stringify(simData));
  renderSimulation();
}

function renderSimulation(){
  const yr=activeYear;
  document.getElementById('topbar-badge').textContent=yr+' 시뮬레이션';
  _hideWeekNav();
  document.getElementById('review-section').innerHTML='';

  // 전체 합산
  let totSales=0,totAd=0,totOrg=0,totSpend=0,totOrders=0;
  const rows=[];
  Object.keys(simData).sort((a,b)=>simData[a].mo-simData[b].mo).forEach(key=>{
    const c=calcSim(key); if(!c) return;
    totSales+=c.totalSales; totAd+=c.adSales; totOrg+=c.organic; totSpend+=c.adSpend; totOrders+=(c.orders||0);
    rows.push({key,d:simData[key],c});
  });
  const totRoas=totSpend>0?totSales/totSpend:0;
  const totAcos=totSales>0?totSpend/totSales*100:0;
  const orgPctTotal=totSales>0?totOrg/totSales*100:0;
  const r=avgRate(agg(allData.filter(d=>d.yr===yr)));

  // 배너
  document.getElementById('top-banner').innerHTML=`<div class="banner-projected"><div>
    <div class="banner-label">🎯 ${yr}년 연간 시뮬레이션 · 예상 총 매출</div>
    <div class="banner-value">${fmtAgg(totSales,r.krw,r.sgd)}</div>
    <div class="banner-meta">광고비 ${fmtAgg(totSpend,r.krw,r.sgd)} · Total ROAS ${(totRoas*100).toFixed(0)}% · ACoS ${Math.round(totAcos)} · 오가닉 ${orgPctTotal.toFixed(1)}%</div>
  </div><div class="banner-right">
    <div class="banner-month">${yr}(E)</div>
    <div class="banner-days">광고매출 ${totSales>0?(totAd/totSales*100).toFixed(1):'0'}% · 오가닉 ${orgPctTotal.toFixed(1)}%</div>
  </div></div>`;

  // KPI
  document.getElementById('kpi-row1').innerHTML=`
    <div class="kpi-card"><div class="kpi-lbl">연간 총 매출</div><div class="kpi-val" style="color:#1d4ed8;font-weight:800">${fmtAgg(totSales,r.krw,r.sgd)}</div></div>
    <div class="kpi-card"><div class="kpi-lbl">광고 매출</div><div class="kpi-val">${fmtAgg(totAd,r.krw,r.sgd)} <span style="font-size:11px;color:var(--muted)">(${totSales>0?(totAd/totSales*100).toFixed(1):'0'}%)</span></div></div>
    <div class="kpi-card"><div class="kpi-lbl">오가닉</div><div class="kpi-val">${fmtAgg(totOrg,r.krw,r.sgd)} <span style="font-size:11px;color:var(--muted)">(${orgPctTotal.toFixed(1)}%)</span></div></div>
    <div class="kpi-card"><div class="kpi-lbl">연간 광고비</div><div class="kpi-val">${fmtAgg(totSpend,r.krw,r.sgd)}</div></div>
    <div class="kpi-card"><div class="kpi-lbl">Total ROAS</div><div class="kpi-val">${(totRoas*100).toFixed(0)}%</div></div>`;
  document.getElementById('ratio-grid').innerHTML='';

  // 차트: 확정(파랑) + 시뮬레이션(노랑) 누적 바 + 트렌드 예측 라인
  const moNames=['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const labels=rows.map(({d})=>moNames[d.mo]);
  const actD=rows.map(({d,c})=>d.locked?Math.round(c.totalSales):0);
  const simD=rows.map(({d,c})=>d.locked?0:Math.round(c.totalSales));
  const trendD=rows.map(({d})=>d.trendPredicted||null);
  document.getElementById('chart-main-title').textContent='월별 매출 — 확정 vs 시뮬레이션';
  if(mainCI)mainCI.destroy();
  mainCI=new Chart(document.getElementById('mainChart').getContext('2d'),{
    type:'bar',
    data:{labels,datasets:[
      {label:'확정 매출',data:actD,backgroundColor:'rgba(59,130,246,.75)',borderRadius:4,stack:'s'},
      {label:'시뮬레이션',data:simD,backgroundColor:'rgba(251,191,36,.65)',borderRadius:4,stack:'s'},
      {label:'트렌드 예측',data:trendD,type:'line',borderColor:'rgba(239,68,68,.75)',backgroundColor:'transparent',borderWidth:2,borderDash:[6,3],pointRadius:4,pointBackgroundColor:'rgba(239,68,68,.8)',tension:0.35,stack:undefined,order:0},
    ]},
    options:{responsive:true,maintainAspectRatio:false,animation:false,
      plugins:{legend:{labels:{color:'#475569',boxWidth:10,font:{size:11}}}},
      scales:{x:{ticks:{color:'#64748b'}},y:{ticks:{color:'#64748b',callback:v=>'$'+Math.round(v/1000)+'k'}}}}
  });
  // 도넛: 광고 vs 오가닉
  if(donutCI)donutCI.destroy();
  donutCI=new Chart(document.getElementById('donutChart').getContext('2d'),{type:'doughnut',
    data:{labels:['Ad Sales','Organic'],datasets:[{data:[Math.round(totAd),Math.round(totOrg)],backgroundColor:['#22c55e','#fbbf24'],borderWidth:0,hoverOffset:5}]},
    options:{responsive:true,maintainAspectRatio:false,animation:false,cutout:'65%',plugins:{legend:{position:'bottom',labels:{color:'#475569',boxWidth:10,font:{size:11}}}}}});

  // 시뮬레이션 테이블
  const inp=(key,field,val,unit)=>`<input type="number" value="${val}" min="0" step="${field==='roas'||field==='orgPct'?1:10}"
    style="width:65px;padding:2px 5px;border:1px solid var(--border);border-radius:5px;font-size:12px;text-align:right"
    onchange="updateSim('${key}','${field}',this.value)">${unit?`<span style="font-size:10px;color:var(--muted)">${unit}</span>`:''}`;
  document.getElementById('summary-section').innerHTML=`
  <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
    <div class="section-title" style="margin:0">📊 ${yr}년 월별 시뮬레이션</div>
    <button onclick="resetSimData()" style="font-size:11px;padding:3px 10px;border:1px solid var(--border);border-radius:6px;cursor:pointer;background:var(--card2);color:var(--muted)">↺ 트렌드 초기화</button>
  </div>
  <div class="table-wrap scrollx"><table><thead><tr>
    <th style="text-align:left">월</th><th>상태</th>
    <th>광고비($)</th><th>ROAS(%)</th><th>오가닉%</th>
    <th>Total Sales</th><th>Organic</th><th>Ad Sales</th><th>Ad Spend</th>
    <th>Total ROAS</th><th>Total ACoS</th><th>Ad ROAS</th><th>Ad ACoS</th><th>Orders</th>
    <th style="color:rgba(239,68,68,.85)">트렌드 예측</th><th style="color:rgba(239,68,68,.85)">vs 트렌드</th>
  </tr></thead><tbody>
  ${rows.map(({key,d,c})=>{
    const locked=d.locked;
    const moName=moNames[d.mo];
    const status=locked?`<span class="badge badge-up" style="font-size:10px">✅ 확정</span>`:`<span class="badge badge-neu" style="font-size:10px">📝 입력</span>`;
    const rowStyle=locked?'':'background:rgba(251,191,36,.05)';
    const adSpendCell=locked?fmtAgg(c.adSpend,r.krw,r.sgd):inp(key,'adSpend',d.adSpend,'');
    const roasCell=locked?`${Math.round(d.roas??c.totalRoas*100)}%`:inp(key,'roas',d.roas,'%');
    const orgCell=locked?`${d.orgPct.toFixed(1)}%`:inp(key,'orgPct',d.orgPct,'%');
    const totalRoasFmt=c.totalRoas!=null?(c.totalRoas*100).toFixed(0)+'%':'—';
    const totalAcosFmt=c.totalAcos!=null?Math.round(c.totalAcos):'—';
    const adRoasFmt=c.adRoas!=null?(c.adRoas*100).toFixed(0)+'%':'—';
    const adAcosFmt=c.adAcos!=null?Math.round(c.adAcos):'—';
    // 트렌드 차이 (확정 행만)
    let trendCell='—', diffCell='—', salesBadge='';
    if(locked && d.trendPredicted){
      const diff=c.totalSales-d.trendPredicted;
      const diffPct=d.trendPredicted>0?diff/d.trendPredicted*100:0;
      const col=diff>=0?'#16a34a':'#dc2626';
      const arrow=diff>=0?'▲':'▼';
      trendCell=`$${Math.round(d.trendPredicted).toLocaleString()}`;
      diffCell=`<span style="color:${col};font-weight:600">${arrow} ${diff>=0?'+':''}$${Math.round(Math.abs(diff)).toLocaleString()} (${diff>=0?'+':''}${diffPct.toFixed(1)}%)</span>`;
      salesBadge=`<div style="font-size:10px;color:${col};margin-top:1px">${arrow} ${diff>=0?'+':''}${diffPct.toFixed(1)}% vs 트렌드</div>`;
    }
    return `<tr style="${rowStyle}">
      <td style="font-weight:600;white-space:nowrap">${moName}</td><td>${status}</td>
      <td>${adSpendCell}</td><td>${roasCell}</td><td>${orgCell}</td>
      <td><strong style="color:#1d4ed8">${fmtAgg(c.totalSales,r.krw,r.sgd)}</strong>${salesBadge}</td>
      <td>${fmtAgg(c.organic,r.krw,r.sgd)}</td>
      <td>${fmtAgg(c.adSales,r.krw,r.sgd)}</td>
      <td>${fmtAgg(c.adSpend,r.krw,r.sgd)}</td>
      <td>${totalRoasFmt}</td><td>${totalAcosFmt}</td>
      <td>${adRoasFmt}</td><td>${adAcosFmt}</td>
      <td>${c.orders||0}</td>
      <td style="color:#94a3b8">${trendCell}</td><td>${diffCell}</td>
    </tr>`;}).join('')}
  ${(()=>{
    const totTrend=rows.reduce((s,{d})=>s+(d.trendPredicted&&d.locked?d.trendPredicted:0),0);
    const totActConf=rows.reduce((s,{d,c})=>s+(d.locked?c.totalSales:0),0);
    const totDiff=totActConf-totTrend;
    const totDiffPct=totTrend>0?totDiff/totTrend*100:0;
    const col=totDiff>=0?'#16a34a':'#dc2626';
    const arrow=totDiff>=0?'▲':'▼';
    const totAdRoas=totSpend>0?totAd/totSpend:0;
    const totAdAcos=totAd>0?totSpend/totAd*100:0;
    return `<tr style="font-weight:700;background:var(--card2);border-top:2px solid var(--border)">
    <td colspan="2">연간 합계</td>
    <td>${fmtAgg(totSpend,r.krw,r.sgd)}</td><td>—</td><td>${orgPctTotal.toFixed(1)}%</td>
    <td><strong style="color:#1d4ed8">${fmtAgg(totSales,r.krw,r.sgd)}</strong></td>
    <td>${fmtAgg(totOrg,r.krw,r.sgd)}</td>
    <td>${fmtAgg(totAd,r.krw,r.sgd)}</td>
    <td>${fmtAgg(totSpend,r.krw,r.sgd)}</td>
    <td>${(totRoas*100).toFixed(0)}%</td><td>${Math.round(totAcos)}</td>
    <td>${(totAdRoas*100).toFixed(0)}%</td><td>${Math.round(totAdAcos)}</td>
    <td>${totOrders}</td>
    <td style="color:#94a3b8">${totTrend>0?'$'+Math.round(totTrend).toLocaleString():'—'}</td>
    <td>${totTrend>0?`<span style="color:${col};font-weight:600">${arrow} ${totDiff>=0?'+':''}$${Math.round(Math.abs(totDiff)).toLocaleString()} (${totDiff>=0?'+':''}${totDiffPct.toFixed(1)}%)</span>`:'—'}</td>
  </tr>`;
  })()}
  </tbody></table></div>`;
}

// ──── MAIN RENDER ──────────────────────────────────────────────────
function render(){
  const nav=document.querySelector('.navbar');
  if(appMode==='ads'){
    if(nav) nav.style.display='none';            // 광고 모드: 매출용 네비 숨김
    document.getElementById('daily-section').style.display='none';
    if(activeTab==='campaign') renderCampaigns();
    else if(activeTab==='adgroup') renderAdGroups();
    else if(activeTab==='keyword') renderKeywordPerf();
    else if(activeTab==='allkw') renderAllKeywords();
    else if(activeTab==='newkw') renderNewKeywords();
    else renderAds();
    return;
  }
  if(nav) nav.style.display='';                    // 매출 모드: 네비 표시
  const _kr=document.getElementById('kpi-row1'); _kr.className='kpi-grid5'; _kr.style.display='';
  const _rg=document.getElementById('ratio-grid'); _rg.className='ratio-grid'; _rg.style.display=''; _rg.style.marginBottom='';
  const _cg=document.getElementById('charts-grid'); _cg.style.gridTemplateColumns='';
  const _dc=document.getElementById('donut-card'); if(_dc)_dc.style.display='';
  const _mw=document.getElementById('mainChart-wrap'); if(_mw)_mw.style.height='360px';
  if(activeTab!=='weekly' && !byMonth[activeMonth]) activeMonth=monthKeys[monthKeys.length-1];
  buildNavbar();
  document.getElementById('daily-section').style.display='none';
  if(simMode){ renderSimulation(); return; }
  document.getElementById('daily-section').style.display = activeTab==='daily'?'block':'none';
  if(activeTab==='annual') renderAnnual();
  else if(activeTab==='quarter') renderQuarter();
  else if(activeTab==='monthly') renderMonthly();
  else if(activeTab==='weekly') renderWeekly();
  else renderDaily();
}

// ──── KPI (item 4) ─────────────────────────────────────────────────
function renderKPIs(cT,pT){
  const r=avgRate(cT);
  const adPct=cT.sales>0?(cT.adSales/cT.sales*100).toFixed(1)+'%':'';
  const orgPct=cT.sales>0?(cT.organic/cT.sales*100).toFixed(1)+'%':'';
  const cards=[
    {lb:T('totalSales'),val:fmtAgg(cT.sales,r.krw,r.sgd),c:cT.sales,p:pT?.sales,inv:false,kc:'#3b82f6',vine:cT.vineTotal},
    {lb:T('adSales'),val:fmtAgg(cT.adSales,r.krw,r.sgd),c:cT.adSales,p:pT?.adSales,inv:false,kc:'#f97316',pct:adPct},
    {lb:T('organic'),val:fmtAgg(cT.organic,r.krw,r.sgd),c:cT.organic,p:pT?.organic,inv:false,kc:'#06b6d4',vine:cT.vineTotal,pct:orgPct},
    {lb:T('orders'),val:fmtN(cT.orders),c:cT.orders,p:pT?.orders,inv:false,kc:'#22c55e'},
    {lb:T('items'),val:fmtN(cT.items),c:cT.items,p:pT?.items,inv:false,kc:'#a855f7'},
  ];
  document.getElementById('kpi-row1').innerHTML=cards.map((k,i)=>{
    const {cls,txt}=chg(k.c,k.p,k.inv);
    const vine=(vineMode==='include'&&k.vine&&k.vine<0)?`<div class="kpi-vine">🌿 Vine ${fmtAgg(k.vine,r.krw,r.sgd)}</div>`:'';
    const pctBadge=k.pct?`<span style="font-size:11px;font-weight:500;color:var(--muted);margin-left:5px">(${k.pct})</span>`:'';
    const isTotal=i===0;return `<div class="kpi-card" style="--kc:${k.kc}${isTotal?';border-top-width:4px':''}"><div class="kpi-lbl">${k.lb}</div><div class="kpi-val" style="${isTotal?'font-weight:800;color:#1d4ed8':''};">${k.val}${pctBadge}</div>${vine}<div class="kpi-chg ${cls}">${txt}</div></div>`;
  }).join('');
  // row2: ad spend (item 4)
  const {cls,txt}=chg(cT.adSpend,pT?.adSpend,true);

}
function renderRatios(cT){
  const adRoas=cT.adSpend>0?cT.adSales/cT.adSpend:0, adAcos=cT.adSales>0?cT.adSpend/cT.adSales*100:0;
  const tr=cT.adSpend>0?cT.sales/cT.adSpend:0, tc=cT.sales>0?cT.adSpend/cT.sales*100:0;
  const r=avgRate(cT);
  const cards=[
    {lb:'📢 '+T('adSpend'),val:fmtAgg(cT.adSpend,r.krw,r.sgd),sub:T('adSpend')},
    {lb:'🎯 '+T('roas'),val:fmtRoas(tr),sub:T('roasSub')},
    {lb:'📉 '+T('acos'),val:fmtAcos(tc),sub:T('acosSub')},
    {lb:'📊 '+T('troas'),val:fmtRoas(adRoas),sub:T('troasSub')},
    {lb:'📈 '+T('tacos'),val:fmtAcos(adAcos),sub:T('tacosSub')},
  ];
  document.getElementById('ratio-grid').innerHTML=cards.map(c=>`<div class="ratio-card"><div class="ratio-lbl">${c.lb}</div><div class="ratio-val">${c.val}</div><div class="ratio-sub">${c.sub}</div></div>`).join('');
}

// ──── ANNUAL ───────────────────────────────────────────────────────
function _hideWeekNav(){const nb=document.getElementById('week-nav-bar');if(nb)nb.style.display='none';}
function renderAnnual(){
  const _rs=document.getElementById('review-section');if(_rs)_rs.innerHTML='';_hideWeekNav();
  const yr=activeYear;
  const yRows=rangedData().filter(d=>d.yr===yr);
  const yT=yRows.length?agg(yRows):emptyT();
  const rate=avgRate(yT);
  const cd=Math.max(1,yRows.length);
  const dAvg=yT.sales/cd, proj=dAvg*365;
  document.getElementById('topbar-badge').textContent=yName(yr)+' '+T('annual');
  document.getElementById('top-banner').innerHTML=`
    <div class="banner-projected"><div>
      <div class="banner-label">🎯 ${yName(yr)} ${T('annualProj')}</div>
      <div class="banner-value">${fmtAgg(proj,rate.krw,rate.sgd)}</div>
      <div class="banner-meta">${T('dailyAvg')} ${fmtAgg(dAvg,rate.krw,rate.sgd)} × 365${T('days')} · ${cd}${T('days')}</div>
      ${yT.vineTotal<0?`<div class="vine-note-banner">${T('vineIncluded')}: ${fmtAgg(yT.vineTotal,rate.krw,rate.sgd)}</div>`:''}
    </div><div class="banner-right"><div class="banner-month">${yName(yr)} ${T('ytd')}</div><div class="banner-days">${T('confirmed')}: ${fmtAgg(yT.sales,rate.krw,rate.sgd)}</div></div></div>`;
  renderKPIs(yT,null); renderRatios(yT);
  const mData=monthKeys.filter(k=>byMonth[k].yr===yr);
  renderTrendChart(mData.map(k=>mNameS(byMonth[k].mo)),mData.map(k=>agg(byMonth[k].rows)),T('monthlyTrend'));
  renderDonut(yT,rate);
  renderMonthSummary(mData,T('monthlySummary'),rate);
}

// ──── QUARTER (item 3 drilldown) ───────────────────────────────────
function renderQuarter(){
  const _rs=document.getElementById('review-section');if(_rs)_rs.innerHTML='';_hideWeekNav();
  const yr=activeYear;
  const quarters=[1,2,3,4].map(q=>{
    const mos=[1+(q-1)*3,2+(q-1)*3,3+(q-1)*3];
    const rows=rangedData().filter(d=>d.yr===yr&&mos.includes(d.mo));
    const t=rows.length?agg(rows):emptyT(); const rate=avgRate(t);
    const conf=isConfirmed(yr,mos[2]); const empty=rows.length===0; const inProg=!conf&&!empty;
    let proj=0;
    if(inProg){ mos.forEach(mo=>{const mr=allData.filter(d=>d.yr===yr&&d.mo===mo&&inRange(d));if(mr.length){const mt=agg(mr);const dim=new Date(yr,mo,0).getDate();proj+=isConfirmed(yr,mo)?mt.sales:calcProjSales(mt.sales,mr,yr,mo,dim)}}); }
    return {q,mos,rows,t,rate,conf,empty,inProg,proj};
  });
  const yRows=rangedData().filter(d=>d.yr===yr);
  const yT=yRows.length?agg(yRows):emptyT(); const yRate=avgRate(yT);
  document.getElementById('topbar-badge').textContent=yName(yr)+' '+T('quarter');
  document.getElementById('top-banner').innerHTML=`<div class="quarter-cards">${quarters.map(q=>{
    if(q.empty)return `<div class="q-card ${q.q===activeQuarter?'sel':''}" onclick="selectQuarter(${q.q})"><div class="q-label">${qNameFull(q.q)}</div><span class="q-status empty">${T('noData')}</span><div class="q-value dim">—</div></div>`;
    if(q.conf)return `<div class="q-card confirmed ${q.q===activeQuarter?'sel':''}" onclick="selectQuarter(${q.q})"><div class="q-label">${qNameFull(q.q)}</div><span class="q-status confirmed">✅ ${T('confirmed')}</span><div class="q-value">${fmtAgg(q.t.sales,q.rate.krw,q.rate.sgd)}</div></div>`;
    return `<div class="q-card projected ${q.q===activeQuarter?'sel':''}" onclick="selectQuarter(${q.q})"><div class="q-label">${qNameFull(q.q)}</div><span class="q-status projected">🎯 ${T('projected')}</span><div class="q-value">${fmtAgg(q.proj,q.rate.krw,q.rate.sgd)}</div></div>`;
  }).join('')}</div>`;
  renderKPIs(yT,null); renderRatios(yT);
  const valid=quarters.filter(q=>!q.empty);
  renderTrendChart(valid.map(q=>qName(q.q)),valid.map(q=>q.t),T('quarterTrend'),valid.map(q=>q.conf?q.t.sales:q.proj));
  renderDonut(yT,yRate);
  // item 3: drilldown for active quarter
  const aq=quarters.find(q=>q.q===activeQuarter);
  let html=`<div class="section-title">${T('quarterSummary')}</div><div class="table-wrap"><table>
    <thead><tr><th>${T('quarterCol')}</th><th>${T('status')}</th><th>${T('totalSales')}</th><th>${T('projSales')}</th><th>${T('organic')}</th><th>${T('adSales')}</th><th>${T('adSpend')}</th><th>${T('roas')}</th><th>${T('acos')}</th><th>${T('orders')}</th></tr></thead><tbody>${
    valid.map(q=>{
      const totalRoas=q.t.adSpend>0?q.t.sales/q.t.adSpend:0;
      const totalAcos=q.t.sales>0?q.t.adSpend/q.t.sales*100:0;
      const val=q.t.sales; // 항상 실제 입력된 매출 사용
      const proj=q.conf?'—':fmtAgg(q.proj,q.rate.krw,q.rate.sgd);
      const st=q.conf?`<span class="badge badge-up">${T('confirmed')}</span>`:`<span class="badge badge-neu">${T('projected')}</span>`;
      return `<tr style="${q.q===activeQuarter?'outline:1px solid var(--yellow);outline-offset:-1px':''}"><td>${qName(q.q)}</td><td>${st}</td><td><strong style="color:#1d4ed8">${fmtAgg(val,q.rate.krw,q.rate.sgd)}</strong></td><td style="color:var(--accent)">${proj}</td><td>${fmtAgg(q.t.organic,q.rate.krw,q.rate.sgd)}</td><td>${fmtAgg(q.t.adSales,q.rate.krw,q.rate.sgd)}</td><td>${fmtAgg(q.t.adSpend,q.rate.krw,q.rate.sgd)}</td><td>${fmtRoas(totalRoas)}</td><td>${fmtAcos(totalAcos)}</td><td>${fmtN(q.t.orders)}</td></tr>`;}).join('')
  }</tbody></table></div>`;
  if(aq&&!aq.empty){
    const mData=monthKeys.filter(k=>byMonth[k].yr===yr&&aq.mos.includes(byMonth[k].mo));
    html+=`<div class="section-title">${T('drillTitle')} — ${qName(aq.q)}</div>`+monthSummaryHTML(mData,avgRate(aq.t));
  }
  document.getElementById('summary-section').innerHTML=html;
}

// ──── MONTHLY REVIEW ────────────────────────────────────────────────
const MONTHLY_REVIEWS={
  '2026_2':{
    ko:`<p>🌱 <strong>Vine 런칭 월 — 실매출 $96, Vine $5,790</strong>. 2/24 실구매 1건 외 전량 Vine 리뷰어 발송. 매출보다 리뷰 시딩이 목표인 달.</p>
<p>📢 <strong>광고 집행 없음.</strong> 오가닉 트래픽만으로 운영. 세션 데이터 극히 미미 (일 1~4회). 브랜드 인지도 0에 가까운 초기 상태.</p>
<p>📋 <strong>Vine 효과 분석:</strong> 2/26~27 이틀간 140건 Vine 오더. 리뷰 확보 후 광고 론칭 준비 단계로 적절한 전략.</p>
<p>📌 <strong>다음 달 포커스:</strong> Vine 리뷰 게시 확인 → 광고 캠페인 론칭 → 초기 키워드 테스트.</p>`,
    en:`<p>🌱 <strong>Vine launch month — Real sales $96, Vine $5,790</strong>. Only 1 real purchase (2/24); all else is Vine reviewer seeding. Revenue secondary to review acquisition this month.</p>
<p>📢 <strong>No ad spend.</strong> Organic traffic only, sessions minimal (1–4/day). Brand awareness near zero at this stage.</p>
<p>📋 <strong>Vine impact:</strong> 140 Vine orders over 2/26–27. Correct strategy: secure reviews first, then launch ads.</p>
<p>📌 <strong>Next month focus:</strong> Confirm Vine reviews posted → launch ad campaigns → test initial keywords.</p>`
  },
  '2026_3':{
    ko:`<p>🚀 <strong>광고 첫 달 — 실매출 $979 / 광고비 $754 / 17 real orders</strong>. 3/10 광고 첫 집행. Vine($1,950) 제외 순매출 기준.</p>
<p>📊 <strong>Total ROAS 0.41 (Vine 제외 기준):</strong> 광고 첫 달로 효율보다 데이터 수집에 의의. 어떤 키워드/상품이 전환되는지 파악하는 기간.</p>
<p>🌱 <strong>오가닉 비중 낮음:</strong> 광고 없이는 세션·매출 모두 제한적. CO2 마스크 키워드 인지도 형성 단계.</p>
<p>⚠️ <strong>Vine 3/16:</strong> $1,950 재고 발송으로 실매출 희석. Vine 제외 수치로 광고 성과 평가 필요.</p>
<p>📌 <strong>다음 달 포커스:</strong> 전환 키워드 집중 → 비효율 캠페인 예산 축소 → 일 예산 점진적 증대.</p>`,
    en:`<p>🚀 <strong>First ad month — Real sales $979 / Ad spend $754 / 17 real orders</strong>. Ads launched 3/10. Excluding Vine ($1,950).</p>
<p>📊 <strong>Total ROAS 0.41 (ex-Vine):</strong> First ad month — data collection more valuable than efficiency. Identifying which keywords/products convert.</p>
<p>🌱 <strong>Low organic share:</strong> Sessions and sales heavily dependent on ads. CO2 mask keyword awareness still being built.</p>
<p>⚠️ <strong>Vine 3/16:</strong> $1,950 inventory send dilutes real sales metrics. Evaluate ad performance on ex-Vine numbers.</p>
<p>📌 <strong>Next month focus:</strong> Concentrate on converting keywords → cut low-efficiency budgets → gradually scale daily spend.</p>`
  },
  '2026_4':{
    ko:`<p>📈 <strong>성장 가속 — 실매출 $3,821 / 광고비 $2,770 / 62 real orders</strong>. 전월 대비 실매출 +290%. Vine($1,950) 제외 기준.</p>
<p>💪 <strong>주간 최고기록:</strong> 4/26~5/2 주간 $1,518 — 일 평균 $217. 캠페인 최적화 효과 본격화.</p>
<p>⚠️ <strong>광고 효율 아직 낮음:</strong> Total ROAS 0.96 (실매출 기준). 광고비가 매출과 거의 동일 수준. 4월 하순부터 개선 신호 보임 (4/27 $325, 4/28 $422).</p>
<p>🌱 <strong>오가닉 증가 시작:</strong> 4월 후반 오가닉 비중 15~25%. Vine 리뷰 효과 반영되기 시작.</p>
<p>📌 <strong>다음 달 포커스:</strong> CO2 마스크 핵심 KW 집중, 미전환 캠페인 정리, 일 예산 $120→$150 확대 검토.</p>`,
    en:`<p>📈 <strong>Growth acceleration — Real sales $3,821 / Ad spend $2,770 / 62 real orders</strong>. +290% real revenue MoM. Excluding Vine ($1,950).</p>
<p>💪 <strong>Best week:</strong> 4/26–5/2 at $1,518 total — $217/day avg. Campaign optimization paying off.</p>
<p>⚠️ <strong>Ad efficiency still low:</strong> Total ROAS 0.96 (ex-Vine). Ad spend nearly equals revenue. Improvement signals visible late April ($325 on 4/27, $422 on 4/28).</p>
<p>🌱 <strong>Organic starting to grow:</strong> Late April organic share 15–25%. Vine review effect beginning to show.</p>
<p>📌 <strong>Next month focus:</strong> Concentrate on CO2 mask core keywords, clean up non-converting campaigns, consider scaling daily budget $120→$150.</p>`
  },
  '2026_5':{
    ko:`<p>📈 <strong>3주차(5/15~21) 전환점:</strong> 일평균 매출이 전주($93) 대비 <strong>+142%($225)</strong>로 급증. 캠페인 확장 및 세션 급증(5/15 249회)이 맞물린 결과.</p>
<p>🌱 <strong>오가닉 비중 34%($1,385):</strong> 광고 없이 발생한 수요. 브랜드 인지도가 점진적으로 쌓이고 있음. 전체 매출 중 광고 기여 66%.</p>
<p>⚠️ <strong>광고 효율 개선 필요:</strong> Total ROAS 1.26으로 아직 손익분기점 미달. Ad ACoS 120% — 광고 기여 매출만으로는 광고비 미회수. 고효율 키워드 집중 + 저효율 예산 축소 권장.</p>
<p>🏆 <strong>베스트 데이:</strong> 5/25 $383 (7 orders) · 5/17 $329 (6 orders). 주말 전후 집중 구매 패턴 확인 → 주말 입찰가 상향 고려.</p>
<p>📌 <strong>다음 달 포커스:</strong> 광고 예산 유지 + CVR 개선(PDP 최적화), CO2 마스크 핵심 키워드 중심 캠페인 집중.</p>`,
    en:`<p>📈 <strong>Week 3 (5/15–21) inflection point:</strong> Daily avg revenue jumped <strong>+142% ($225/day)</strong> vs prior week ($93/day). Campaign scaling + session surge (249 on 5/15) drove the breakout.</p>
<p>🌱 <strong>Organic share 34% ($1,385):</strong> Demand without ads — brand visibility is gradually building. 66% of revenue is ad-attributed.</p>
<p>⚠️ <strong>Ad efficiency needs improvement:</strong> Total ROAS 1.26, still below breakeven. Ad ACoS 120% — ad-attributed revenue alone doesn't cover spend. Focus budget on high-performing keywords, cut low-efficiency campaigns.</p>
<p>🏆 <strong>Best days:</strong> 5/25 $384 (7 orders) · 5/17 $329 (6 orders). Weekend buying concentration confirmed → consider raising weekend bids.</p>
<p>📌 <strong>Next month focus:</strong> Maintain ad budget + improve CVR (PDP optimization), concentrate on core CO2 mask keywords.</p>`
  }
};
// ── Review note localStorage helpers ──
function _rnKey(id){return'jb_review_note_'+id;}
function loadNote(id){return localStorage.getItem(_rnKey(id))||'';}
function saveNote(id){
  const ta=document.getElementById('rn-ta-'+id);
  if(!ta)return;
  localStorage.setItem(_rnKey(id),ta.value);
  renderReviewNoteArea(id);
}
function toggleNoteEdit(id){
  const ea=document.getElementById('rn-edit-'+id);
  if(!ea)return;
  const open=ea.style.display!=='none';
  ea.style.display=open?'none':'block';
  if(!open){const ta=document.getElementById('rn-ta-'+id);if(ta)ta.value=loadNote(id);}
}
function renderReviewNoteArea(id){
  const saved=loadNote(id);
  const na=document.getElementById('rn-note-'+id);
  const ea=document.getElementById('rn-edit-'+id);
  if(na){
    na.style.display=saved?'block':'none';
    const nt=na.querySelector('.review-notes-text');if(nt)nt.textContent=saved;
  }
  if(ea)ea.style.display='none';
}

// ── Review card builder (monthly & weekly share same structure) ──
function _buildReviewCard(id,title,subtitle,kpiItems,commentary){
  const saved=loadNote(id);
  const aiContent=localStorage.getItem('ai_review_'+id);
  const displayComm=aiContent||commentary||`<span style="color:var(--muted);font-size:13px">${isKo()?'AI 생성 버튼을 눌러 요약을 만들어보세요.':'Click 🤖 AI Generate to create a summary.'}</span>`;
  const aiTag=aiContent?`<span style="font-size:9px;background:rgba(99,102,241,.15);color:#6366f1;padding:2px 6px;border-radius:10px;margin-left:6px">🤖 AI</span>`:'';
  const kpiHtml=kpiItems.map(([lb,val,col])=>`<div class="review-kpi"><div class="review-kpi-lbl">${lb}</div><div class="review-kpi-val" style="color:${col||'var(--text)'}">${val}</div></div>`).join('');
  const noteHtml=saved?`<div style="font-style:italic;color:#6b7280">${saved}</div>`:'';
  return `<div class="review-card">
  <div class="review-header">
    <span class="review-header-title">📋 ${title}${aiTag}</span>
    <span style="font-size:11px;color:rgba(255,255,255,.65);margin-left:4px">${subtitle}</span>
    <button class="review-edit-btn" onclick="toggleNoteEdit('${id}')">✏️ ${isKo()?'메모 편집':'Edit Note'}</button>
    <button class="review-ai-btn" id="ai-btn-${id}" onclick="triggerAIGenerate('${id}')">🤖 ${isKo()?'AI 생성':'AI Generate'}</button>
  </div>
  <div class="review-body">
    <div class="review-kpis">${kpiHtml}</div>
    <div class="review-commentary" id="ai-comm-${id}">${displayComm}</div>
    <div class="review-notes" id="rn-note-${id}" style="display:${saved?'block':'none'}">
      <div class="review-notes-lbl">📝 ${isKo()?'추가 메모':'Notes'}</div>
      <div class="review-notes-text">${saved}</div>
    </div>
    <div id="rn-edit-${id}" style="display:none;margin-top:12px;border-top:1px solid var(--border);padding-top:10px">
      <div class="review-notes-lbl">📝 ${isKo()?'메모 입력 (직접 수정 가능)':'Add / Edit Notes'}</div>
      <textarea class="review-textarea" id="rn-ta-${id}" placeholder="${isKo()?'이슈, 특이사항, 다음 달 액션 등 자유롭게 입력하세요…':'Enter issues, observations, next actions…'}">${saved}</textarea>
      <button class="review-save-btn" onclick="saveNote('${id}')">💾 ${isKo()?'저장':'Save'}</button>
      <button style="margin-left:8px;padding:6px 14px;border:1px solid var(--border);border-radius:7px;font-size:12px;cursor:pointer;background:var(--card)" onclick="toggleNoteEdit('${id}')">${isKo()?'취소':'Cancel'}</button>
    </div>
  </div>
</div>`;
}

function renderMonthlyReview(yr,mo,cT,rate){
  const el=document.getElementById('review-section');
  if(!el)return;
  if(!isConfirmed(yr,mo)&&!localStorage.getItem('ai_review_mo_'+yr+'_'+mo)){el.innerHTML='';return;}
  const key=yr+'_'+mo;
  const rev=MONTHLY_REVIEWS[key];
  const r=rate;
  const totalRoas=cT.adSpend>0?cT.sales/cT.adSpend:0;
  const totalAcos=cT.sales>0?cT.adSpend/cT.sales*100:0;
  const orgPct=cT.sales>0?cT.organic/cT.sales*100:0;
  const sym=activeCurrency==='KRW'?'₩':activeCurrency==='SGD'?'S$':'$';
  const aov=cT.orders>0?cT.sales/cT.orders:0;
  const rc=v=>v>=2?'#22c55e':v>=1?'#f59e0b':'#ef4444';
  const ac=v=>v<50?'#22c55e':v<80?'#f59e0b':'#ef4444';
  const kpis=[
    [isKo()?'총 매출':'Total Sales', fmtAgg(cT.sales,r.krw,r.sgd), '#1d4ed8'],
    ['Total ROAS', fmtRoas(totalRoas), rc(totalRoas)],
    ['Total ACoS', fmtAcos(totalAcos), ac(totalAcos)],
    [isKo()?'오가닉 비중':'Organic %', orgPct.toFixed(1)+'%', '#06b6d4'],
    [isKo()?'평균 주문금액':'Avg Order', sym+aov.toFixed(2), 'var(--text)'],
  ];
  el.innerHTML=_buildReviewCard(
    'mo_'+key,
    (isKo()?'월간 세일즈 리뷰':'Monthly Sales Review')+' — '+ymName(yr,mo),
    isKo()?'Claude 분석':'Analyzed by Claude',
    kpis,
    isKo()?rev.ko:rev.en
  );
}

// ── Weekly reviews ──
const WEEKLY_REVIEWS={
  'wr_2026_02_22':{
    ko:`<p>🌱 <strong>Vine 런칭 주(2/22~28) — 실매출 $96 / Vine $5,790</strong>. 2/24 실구매 1건($96). 2/26~27 Vine 140건 발송.</p>
<p>📢 <strong>광고 없음, 세션 극소.</strong> 브랜드 론칭 첫 주로 리뷰 시딩이 유일한 목표. 매출 수치보다 리뷰 확보가 핵심.</p>
<p>📌 <strong>다음 주 액션:</strong> Vine 리뷰 게시 모니터링 → 광고 론칭 준비.</p>`,
    en:`<p>🌱 <strong>Vine launch week (2/22–28) — Real sales $96 / Vine $5,790</strong>. 1 real order (2/24, $96). 140 Vine units shipped 2/26–27.</p>
<p>📢 <strong>No ads, minimal sessions.</strong> First launch week — review seeding is the only goal. Reviews matter more than revenue here.</p>
<p>📌 <strong>Next week action:</strong> Monitor Vine review postings → prepare ad launch.</p>`
  },
  'wr_2026_03_01':{
    ko:`<p>📅 <strong>3/1~7 — $130 / 2 orders</strong>. 광고 없는 순수 오가닉. 3/3($65), 3/5($65) 각 1건씩.</p>
<p>🌱 <strong>Vine 리뷰 게시 대기 중.</strong> 세션 10~29회/일. 구매 전환은 있으나 매우 제한적. 아직 키워드 인지도 형성 전 단계.</p>
<p>📌 <strong>다음 주:</strong> 광고 첫 집행 준비. 핵심 키워드(co2 mask, carboxy therapy) 타겟팅 설계.</p>`,
    en:`<p>📅 <strong>3/1–7 — $130 / 2 orders</strong>. Pure organic, no ads. Orders on 3/3 ($65) and 3/5 ($65).</p>
<p>🌱 <strong>Vine reviews still pending.</strong> Sessions 10–29/day. Conversions happening but very limited. Pre-keyword-awareness stage.</p>
<p>📌 <strong>Next week:</strong> Prepare first ad launch. Design targeting around core keywords (co2 mask, carboxy therapy).</p>`
  },
  'wr_2026_03_08':{
    ko:`<p>🚀 <strong>광고 첫 주(3/8~14) — $57 / 1 order / 광고비 $130.83</strong>. 3/10 첫 광고 집행. 3/14(토) 첫 광고 전환 $57.</p>
<p>📊 <strong>첫 주 ROAS 0.44.</strong> 광고 초기라 효율보다 데이터 수집이 목적. 클릭·노출 패턴 파악 중.</p>
<p>💡 <strong>세션 급증:</strong> 광고 시작 후 일 세션 23~47회로 상승. 광고 트래픽 유입 확인.</p>
<p>📌 <strong>다음 주:</strong> 전환 키워드 확인, 예산 유지하며 최적화 시작.</p>`,
    en:`<p>🚀 <strong>First ad week (3/8–14) — $57 / 1 order / Ad spend $130.83</strong>. Ads launched 3/10. First ad conversion 3/14 ($57).</p>
<p>📊 <strong>Week 1 ROAS 0.44.</strong> Data collection more important than efficiency at launch. Identifying click and impression patterns.</p>
<p>💡 <strong>Sessions surged:</strong> 23–47/day after ads started. Ad traffic confirmed flowing in.</p>
<p>📌 <strong>Next week:</strong> Identify converting keywords, maintain budget, begin optimization.</p>`
  },
  'wr_2026_03_15':{
    ko:`<p>📅 <strong>3/15~21 — $2,148 ($198 실매출) / 광고비 $169.79</strong>. 3/16 Vine 2차($1,950). 실 광고 전환: $34+$32+$130+$32 = $228.</p>
<p>📈 <strong>광고 효과 확인:</strong> 3/17(화) $34, 3/19(목) $130 전환. CO2 마스크 키워드 전환 시작. Ad ROAS 1.34.</p>
<p>⚠️ <strong>Vine으로 실매출 희석.</strong> Vine 제외 시 주간 실매출 $198, ROAS 1.17. 광고 효율 개선 중.</p>
<p>📌 <strong>다음 주:</strong> 전환 키워드(carboxy therapy, co2 mask) 입찰 강화. 비전환 키워드 예산 축소.</p>`,
    en:`<p>📅 <strong>3/15–21 — $2,148 ($198 real) / Ad spend $169.79</strong>. 3/16 Vine 2nd batch ($1,950). Real ad conversions: $228.</p>
<p>📈 <strong>Ad conversions confirmed:</strong> 3/17 ($34), 3/19 ($130). CO2 mask keywords converting. Ad ROAS 1.34.</p>
<p>⚠️ <strong>Vine diluting real metrics.</strong> Ex-Vine real sales $198, ROAS 1.17. Efficiency improving.</p>
<p>📌 <strong>Next week:</strong> Boost bids on converting keywords (carboxy therapy, co2 mask). Cut budget on non-converters.</p>`
  },
  'wr_2026_03_22':{
    ko:`<p>📅 <strong>3/22~28 — $382 / 6 orders / 광고비 $325.57</strong>. Vine 없는 순수 광고 성과 주간. Total ROAS 1.17.</p>
<p>📈 <strong>첫 $100+ 달성:</strong> 3/24 $122, 3/27 $130. 화·금 전환 강세. 주중 구매 패턴 형성 중.</p>
<p>⚠️ <strong>광고비 $325 vs 매출 $382.</strong> 아직 손익분기 근접. 오가닉 $65 포함 시 개선 여지 있음.</p>
<p>📌 <strong>다음 주:</strong> 예산 소폭 증가, 화/금 입찰가 상향, 저효율 캠페인 정리.</p>`,
    en:`<p>📅 <strong>3/22–28 — $382 / 6 orders / Ad spend $325.57</strong>. Clean ad performance week, no Vine. Total ROAS 1.17.</p>
<p>📈 <strong>First $100+ days:</strong> 3/24 ($122), 3/27 ($130). Tue/Fri conversion strength forming.</p>
<p>⚠️ <strong>Ad spend $325 vs revenue $382.</strong> Near breakeven. Including organic ($65) shows improvement.</p>
<p>📌 <strong>Next week:</strong> Slightly increase budget, raise bids Tue/Fri, clean up low-efficiency campaigns.</p>`
  },
  'wr_2026_03_29':{
    ko:`<p>📅 <strong>3/29~4/4(월경) — $507 / 7 orders / 광고비 $404.76</strong>. 3월→4월 크로스 주간. 주말(4/4 토) $195로 최강.</p>
<p>📈 <strong>주말 강세 패턴 확인:</strong> 4/4(토) $195 (3 orders). 토요일 전환율 높음 → 주말 입찰가 상향 검토.</p>
<p>💡 <strong>Total ROAS 1.25:</strong> 전주 대비 소폭 개선. 광고 최적화 효과 점진적 반영 중.</p>
<p>📌 <strong>4월 첫 주 목표:</strong> 일 예산 $70→$100으로 확대. 토/일 입찰 강화.</p>`,
    en:`<p>📅 <strong>3/29–4/4 (cross-month) — $507 / 7 orders / Ad spend $404.76</strong>. Weekend strong: 4/4 (Sat) $195.</p>
<p>📈 <strong>Weekend pattern confirmed:</strong> Saturday best day (3 orders, $195). Weekend bid increases warranted.</p>
<p>💡 <strong>Total ROAS 1.25:</strong> Slight improvement from prior week. Ad optimization gradually taking effect.</p>
<p>📌 <strong>April W1 target:</strong> Scale daily budget $70→$100. Strengthen Sat/Sun bids.</p>`
  },
  'wr_2026_04_05':{
    ko:`<p>📅 <strong>4/5~11 — $918 / 16 orders / 광고비 $490.43</strong>. 전주 대비 매출 +81%. Total ROAS 1.87 — 손익분기 근접.</p>
<p>📈 <strong>토요일(4/11) 최강: $364 / 6 orders.</strong> 주간 매출의 40% 집중. 주중+주말 고른 전환 시작.</p>
<p>💡 <strong>오가닉 $259 (28%):</strong> Vine 리뷰 효과 반영. 브랜드 검색 증가 신호.</p>
<p>📌 <strong>다음 주:</strong> 예산 $100→$120. 토요일 집중 캠페인 강화. ROAS 2.0 돌파 도전.</p>`,
    en:`<p>📅 <strong>4/5–11 — $918 / 16 orders / Ad spend $490.43</strong>. Revenue +81% WoW. Total ROAS 1.87 — near breakeven.</p>
<p>📈 <strong>Saturday (4/11) best: $364 / 6 orders.</strong> 40% of weekly revenue in one day. Balanced weekday + weekend conversions beginning.</p>
<p>💡 <strong>Organic $259 (28%):</strong> Vine review effect showing. Brand search growing.</p>
<p>📌 <strong>Next week:</strong> Scale $100→$120/day. Strengthen Saturday campaigns. Target ROAS 2.0.</p>`
  },
  'wr_2026_04_12':{
    ko:`<p>📅 <strong>4/12~18 — $2,372 ($422 실매출) / 광고비 $570.14</strong>. 4/14 Vine 3차($1,950). 실매출 기준 ROAS 0.74.</p>
<p>⚠️ <strong>Vine으로 인해 실성과 희석.</strong> Vine 제외 시 실매출 $422, 광고비 $570 → 아직 적자. 광고 최적화 계속 필요.</p>
<p>💡 <strong>광고 전환 다변화:</strong> 일, 수, 목, 토 모두 전환 발생. 특정 요일 의존도 낮아지는 중.</p>
<p>📌 <strong>다음 주:</strong> Vine 마지막 배치 이후 순수 광고 성과 집중 측정. 예산 유지, 키워드 정밀 조정.</p>`,
    en:`<p>📅 <strong>4/12–18 — $2,372 ($422 real) / Ad spend $570.14</strong>. 3rd Vine batch 4/14 ($1,950). Real ROAS 0.74.</p>
<p>⚠️ <strong>Vine diluting real performance.</strong> Ex-Vine: $422 revenue vs $570 spend — still in deficit. Continued optimization needed.</p>
<p>💡 <strong>Conversion diversifying:</strong> Sales occurring Sun, Wed, Thu, Sat. Less single-day dependency.</p>
<p>📌 <strong>Next week:</strong> Post final Vine batch, focus on pure ad performance measurement. Maintain budget, fine-tune keywords.</p>`
  },
  'wr_2026_04_19':{
    ko:`<p>📅 <strong>4/19~25 — $865 / 16 orders / 광고비 $844.17</strong>. Vine 없는 순수 광고 성과. Total ROAS 1.02 — 손익분기점 돌파.</p>
<p>🎯 <strong>ROAS 1.0+ 첫 달성.</strong> 광고비 = 매출 수준. 오가닉 포함 시 실질 흑자 진입. 캠페인 최적화 효과 누적.</p>
<p>📈 <strong>일 $100+ 안정화:</strong> 4/19($129), 4/20($136), 4/22($130), 4/25($243). 토요일 최강.</p>
<p>📌 <strong>다음 주:</strong> 예산 $120→$150 확대. 고효율 키워드 입찰 상향. 손익분기 이상 유지 목표.</p>`,
    en:`<p>📅 <strong>4/19–25 — $865 / 16 orders / Ad spend $844.17</strong>. Pure ad performance, no Vine. Total ROAS 1.02 — breakeven crossed.</p>
<p>🎯 <strong>First ROAS 1.0+ achieved.</strong> Ad spend ≈ revenue. Including organic, net positive. Cumulative optimization effect.</p>
<p>📈 <strong>$100+ days stabilizing:</strong> 4/19 ($129), 4/20 ($136), 4/22 ($130), 4/25 ($243). Saturday strongest.</p>
<p>📌 <strong>Next week:</strong> Scale $120→$150/day. Raise bids on top keywords. Target sustained ROAS above 1.0.</p>`
  },
  'wr_2026_04_26':{
    ko:`<p>📅 <strong>4/26~5/2(월경) — $1,518 / 25 orders / 광고비 $863.86</strong>. Total ROAS 1.76. 월간 최고 주간.</p>
<p>🔥 <strong>4/28(화) $422 / 7 orders — 단일 최고.</strong> 화요일 집중 구매. 4/27(월) $325(5 orders)도 강세. 주초 구매 패턴 공고화.</p>
<p>💡 <strong>오가닉 비중 증가:</strong> 4/26 $252 오가닉 100%, 4/27 $195 오가닉. 브랜드 인지도 상승 확인.</p>
<p>📌 <strong>5월 포커스:</strong> 이 모멘텀 유지. ROAS 2.0 돌파를 위한 저효율 캠페인 컷. 일 예산 $150 안착.</p>`,
    en:`<p>📅 <strong>4/26–5/2 (cross-month) — $1,518 / 25 orders / Ad spend $863.86</strong>. Total ROAS 1.76. Monthly high week.</p>
<p>🔥 <strong>4/28 (Tue) $422 / 7 orders — single-day record.</strong> Monday also strong ($325, 5 orders). Mon–Tue buying pattern solidifying.</p>
<p>💡 <strong>Growing organic share:</strong> 4/26 organic 100%, 4/27 organic $195. Brand awareness rising confirmed.</p>
<p>📌 <strong>May focus:</strong> Maintain this momentum. Cut low-efficiency campaigns for ROAS 2.0. Settle at $150/day budget.</p>`
  },
  'wr_2026_05_03':{
    ko:`<p>📅 <strong>5/3~9 — $611 / 11 orders / 광고비 $776.37</strong>. 전주($1,518) 대비 -60% 급감. Total ROAS 0.79.</p>
<p>⚠️ <strong>전환율 급락 원인 분석 필요.</strong> 5/7(목) 세션 90회인데 매출 $0. 광고 노출은 되나 전환 안 됨. 랜딩/PDP 이슈 가능성.</p>
<p>💡 <strong>세션은 유지(일 51~99회).</strong> 트래픽 문제 아님 — 전환율 문제. PDP 이미지·가격·리뷰 점검 권장.</p>
<p>📌 <strong>다음 주:</strong> PDP 최적화 (메인 이미지, A+ 콘텐츠, 가격 경쟁력) → 전환율 개선.</p>`,
    en:`<p>📅 <strong>5/3–9 — $611 / 11 orders / Ad spend $776.37</strong>. -60% vs prior week ($1,518). Total ROAS 0.79.</p>
<p>⚠️ <strong>Conversion rate drop needs investigation.</strong> 5/7 (Thu): 90 sessions, $0 sales. Impressions without conversions — possible PDP issue.</p>
<p>💡 <strong>Sessions maintained (51–99/day).</strong> Not a traffic problem — a conversion problem. Review PDP images, price, reviews.</p>
<p>📌 <strong>Next week:</strong> PDP optimization (main image, A+ content, pricing competitiveness) → improve CVR.</p>`
  },
  'wr_2026_05_10':{
    ko:`<p>📅 <strong>5/10~16 — $706.58 / 13 orders / 광고비 $600.73</strong>. Total ROAS 1.18. 전주 대비 +16% 회복.</p>
<p>📈 <strong>수요일(5/13) $195 / 3 orders:</strong> 주간 최강. 중반부터 전환율 회복 신호. 5/15(금) $105, 5/16(토) $144.58 — 주말 모멘텀 복귀.</p>
<p>💡 <strong>광고비 합리화:</strong> 전주 대비 광고비 $776→$600(-23%). ROAS 개선. 저효율 캠페인 컷 효과.</p>
<p>📌 <strong>다음 주:</strong> 이 전환 회복세 유지. 5월 3주차 $1,000+ 목표.</p>`,
    en:`<p>📅 <strong>5/10–16 — $706.58 / 13 orders / Ad spend $600.73</strong>. Total ROAS 1.18. +16% recovery from prior week.</p>
<p>📈 <strong>Wednesday (5/13) $195 / 3 orders:</strong> Week's best. Conversion recovery signal from mid-week. Fri/Sat momentum returning.</p>
<p>💡 <strong>Ad spend rationalized:</strong> $776→$600 (-23%) vs prior week. ROAS improved. Low-efficiency campaign cuts working.</p>
<p>📌 <strong>Next week:</strong> Sustain this CVR recovery. Target $1,000+ for May week 3.</p>`
  },
  'wr_2026_05_17':{
    ko:`<p>📅 <strong>5/17~23 — $1,522.22 / 29 orders / 광고비 $943.39</strong>. Total ROAS 1.61. 전주 대비 +116% 폭등.</p>
<p>🔥 <strong>브레이크아웃 주간.</strong> 5/17(일) $328 / 6 orders로 시작, 5/18(월) $294, 5/19(화) $289. 3일 연속 $280+ 기록.</p>
<p>💡 <strong>세션 급증이 방아쇠:</strong> 5/15(금) 249 sessions — 광고 노출 급증 후 3일간 전환 지속. 캠페인 스케일업 타이밍 완벽.</p>
<p>⚠️ <strong>금요일(5/22) $54.79 급락:</strong> 주 후반 소강. 월~수 집중 후 후반부 약세 패턴 반복.</p>
<p>📌 <strong>다음 주:</strong> 이 모멘텀 유지. 월~수 집중 입찰 전략 강화. $1,500+ 주간 목표.</p>`,
    en:`<p>📅 <strong>5/17–23 — $1,522.22 / 29 orders / Ad spend $943.39</strong>. Total ROAS 1.61. +116% WoW — breakout week.</p>
<p>🔥 <strong>Breakout week.</strong> 5/17 (Sun) $328/6 orders, 5/18 (Mon) $294, 5/19 (Tue) $289. Three consecutive $280+ days.</p>
<p>💡 <strong>Session surge triggered it:</strong> 249 sessions on 5/15 (Fri) — ad exposure spike converted over 3 days. Perfect campaign scale-up timing.</p>
<p>⚠️ <strong>Friday (5/22) drop to $54.79:</strong> Late-week slowdown. Mon–Wed concentration with back-half weakness repeating.</p>
<p>📌 <strong>Next week:</strong> Sustain momentum. Strengthen Mon–Wed bid strategy. Target $1,500+ weekly.</p>`
  },
  'wr_2026_05_24':{
    ko:`<p>📅 <strong>5/24~30 — $986.22 / 18 orders / 광고비 $686.56</strong>. Total ROAS 1.44. 전주($1,522) 대비 -35% 조정.</p>
<p>📈 <strong>월요일(5/25) 스파이크: $383 / 7 orders</strong> — 주간 매출의 39% 집중. 주초 구매 패턴 재확인.</p>
<p>⚠️ <strong>5/29~30 데이터 없음.</strong> 주 후반 광고·매출 모두 소강. 5월 마지막 주 특성(월말 예산 소진 가능성).</p>
<p>💡 <strong>오가닉 $219 (22%):</strong> 전주 대비 오가닉 비중 소폭 상승. 브랜드 인지도 축적 지속.</p>
<p>📌 <strong>6월 포커스:</strong> 월초 광고 예산 빠른 집행. 월~화 집중 전략 유지. ROAS 2.0 달성 목표.</p>`,
    en:`<p>📅 <strong>5/24–30 — $986.22 / 18 orders / Ad spend $686.56</strong>. Total ROAS 1.44. -35% from prior week's peak — consolidation.</p>
<p>📈 <strong>Monday (5/25) spike: $383 / 7 orders</strong> — 39% of weekly revenue in one day. Mon buying pattern confirmed again.</p>
<p>⚠️ <strong>No data 5/29–30.</strong> Late-week quiet across ads and sales. Possible month-end budget exhaustion.</p>
<p>💡 <strong>Organic $219 (22%):</strong> Organic share slightly up WoW. Brand awareness continuing to accumulate.</p>
<p>📌 <strong>June focus:</strong> Fast budget deployment at month start. Maintain Mon–Tue concentration strategy. Target ROAS 2.0.</p>`
  }
};
function renderWeeklyReview(weeks){
  const el=document.getElementById('review-section');
  if(!el){return;}
  if(!weeks||!weeks.length){el.innerHTML='';return;}
  const last=weeks[weeks.length-1];
  const t=last.t;
  const rate=avgRate(t);
  const totalRoas=t.adSpend>0?t.sales/t.adSpend:0;
  const totalAcos=t.sales>0?t.adSpend/t.sales*100:0;
  const orgPct=t.sales>0?t.organic/t.sales*100:0;
  const sym=activeCurrency==='KRW'?'₩':activeCurrency==='SGD'?'S$':'$';
  const rc=v=>v>=2?'#22c55e':v>=1?'#f59e0b':'#ef4444';
  const ac=v=>v<50?'#22c55e':v<80?'#f59e0b':'#ef4444';
  const kpis=[
    [isKo()?'주간 매출':'Weekly Sales', fmtAgg(t.sales,rate.krw,rate.sgd), '#1d4ed8'],
    ['Total ROAS', fmtRoas(totalRoas), rc(totalRoas)],
    ['Total ACoS', fmtAcos(totalAcos), ac(totalAcos)],
    [isKo()?'오가닉 비중':'Organic %', orgPct.toFixed(1)+'%', '#06b6d4'],
    [isKo()?'오더 수':'Orders', fmtN(t.orders), 'var(--text)'],
  ];
  // dynamic key from week's Sunday date
  const _wr=last.wSun||(() => {
    const fr=last.rows?.[0]; if(!fr)return null;
    const d=new Date(fr.yr,fr.mo-1,fr.day); d.setDate(d.getDate()-d.getDay()); return d;
  })();
  const wKey=_wr?`wr_${_wr.getFullYear()}_${String(_wr.getMonth()+1).padStart(2,'0')}_${String(_wr.getDate()).padStart(2,'0')}`:'';
  const rev=WEEKLY_REVIEWS[wKey];
  const commentary=rev?(isKo()?rev.ko:rev.en):'';
  if(!commentary&&!wKey){el.innerHTML='';return;}
  el.innerHTML=_buildReviewCard(
    'wk_'+wKey,
    (isKo()?'주간 세일즈 리뷰':'Weekly Sales Review')+' — '+last.label,
    isKo()?'최근 주 · Claude 분석':'Latest Week · Analyzed by Claude',
    kpis,
    commentary
  );
}

// ──── PROJECTED SALES (DOW-weighted) ───────────────────────────────
function getDowWeights(){
  // 요일별(0=일~6=토) 상대 가중치 계산 (전체 데이터 기반)
  const byDow=[[],[],[],[],[],[],[]];
  // 4월 이후 데이터만 사용 (광고 안정화 이후)
  allData.forEach(r=>{ if(r.sales>0&&(r.yr>2026||(r.yr===2026&&r.mo>=4))){ byDow[new Date(r.yr,r.mo-1,r.day).getDay()].push(r.sales); } });
  const avg=byDow.map(arr=>arr.length?arr.reduce((a,b)=>a+b,0)/arr.length:0);
  const filled=avg.filter(v=>v>0);
  if(!filled.length) return [1,1,1,1,1,1,1];
  const overall=filled.reduce((a,b)=>a+b,0)/filled.length;
  return avg.map(v=>v>0?v/overall:1); // 데이터 없는 요일은 가중치 1 사용
}
function calcProjSales(actualSales, dataRows, yr, mo, dim){
  // 현재 달 일평균 × 요일가중치로 남은 날짜 예측 후 합산
  if(!actualSales||!dataRows.length) return actualSales/Math.max(1,dataRows.length)*dim;
  const today=getCaToday();
  const dailyAvg=actualSales/dataRows.length;
  const weights=getDowWeights();
  let proj=actualSales;
  for(let d=1;d<=dim;d++){
    const dd=new Date(yr,mo-1,d);
    if(dd>today) proj+=dailyAvg*weights[dd.getDay()];
  }
  return proj;
}

// ──── MONTHLY ──────────────────────────────────────────────────────
function renderMonthly(){
  const cur=byMonth[activeMonth];
  const rows=cur.rows; // raw rows — no date range filter (month button selects month directly)
  const cT=rows.length?agg(rows):emptyT(); const rate=avgRate(cT);
  const yr=cur.yr;
  document.getElementById('topbar-badge').textContent=ymName(cur.yr,cur.mo);
  const sorted=rows.slice().sort((a,b)=>a.day-b.day);
  const dim=new Date(cur.yr,cur.mo,0).getDate(); const cd=Math.max(1,sorted.length); const proj=calcProjSales(cT.sales,sorted,cur.yr,cur.mo,dim);
  renderBanner(cur,cT,rate,cd,dim,proj);
  renderKPIs(cT,null); renderRatios(cT);
  const mData=monthKeys.filter(k=>byMonth[k].yr===yr);
  const hiIdx=mData.indexOf(activeMonth);
  renderTrendChart(mData.map(k=>mNameS(byMonth[k].mo)),mData.map(k=>agg(byMonth[k].rows)),T('monthlyTrend'),null,hiIdx);
  renderDonut(cT,rate);
  _hideWeekNav();
  renderMonthlyReview(cur.yr,cur.mo,cT,rate);
  document.getElementById('summary-section').innerHTML=`<div class="section-title">${T('monthlySummary')}</div>`+monthSummaryHTML(mData,rate,activeMonth,true);
}

// shared month summary (item 2: confirmed/projected columns)
function monthSummaryHTML(mData,rate,highlightKey,useRaw){
  return `<div class="table-wrap"><table>
    <thead><tr><th>${T('month')}</th><th>${T('confSales')}</th><th>${T('projSales')}</th><th>${T('organic')}</th><th>${T('adSales')}</th><th>${T('adSpend')}</th><th>${T('roas')}</th><th>${T('acos')}</th><th>${T('orders')}</th><th>${T('vineCol')}</th></tr></thead><tbody>${
    mData.map(k=>{const m=byMonth[k];const rr=useRaw?m.rows:m.rows.filter(inRange);const t=rr.length?agg(rr):emptyT();const r=avgRate(t);
    const isHi=highlightKey&&k===highlightKey;
    const totalRoas=t.adSpend>0?t.sales/t.adSpend:0;
    const totalAcos=t.sales>0?t.adSpend/t.sales*100:0;
    const conf=isConfirmed(m.yr,m.mo);const dim=new Date(m.yr,m.mo,0).getDate();const srt=rr.slice().sort((a,b)=>a.day-b.day);const cd=Math.max(1,srt.length);const proj=calcProjSales(t.sales,srt,m.yr,m.mo,dim);
    // "매출" col: confirmed=actual, unconfirmed=current (what we have so far)
    const salesCell=`<strong style="color:#1d4ed8">${fmtAgg(t.sales,r.krw,r.sgd)}</strong>`;
    const projCell=conf?'—':fmtAgg(proj,r.krw,r.sgd);
    const rowStyle=isHi?'outline:2px solid var(--accent);outline-offset:-2px;background:rgba(59,130,246,.05);font-weight:600;':(highlightKey?'opacity:0.55;':'');
    return `<tr style="${rowStyle}"><td>${ymName(m.yr,m.mo)}</td>
      <td class="${conf?'pos':''}">${salesCell}</td>
      <td style="color:var(--accent)">${projCell}</td>
      <td>${fmtAgg(t.organic,r.krw,r.sgd)}</td><td>${fmtAgg(t.adSales,r.krw,r.sgd)}</td><td>${fmtAgg(t.adSpend,r.krw,r.sgd)}</td>
      <td>${fmtRoas(totalRoas)}</td><td>${fmtAcos(totalAcos)}</td><td>${fmtN(t.orders)}</td>
      <td style="color:var(--red)">${t.vineTotal<0?fmtAgg(t.vineTotal,r.krw,r.sgd):'—'}</td></tr>`;}).join('')
  }</tbody></table></div>`;
}
function renderMonthSummary(mData,title,rate){
  document.getElementById('summary-section').innerHTML=`<div class="section-title">${title}</div>`+monthSummaryHTML(mData,rate);
}

// ──── WEEKLY (item 5: vertical) ────────────────────────────────────
function _weekKey(w){
  const fr=w.rows?.[0];if(!fr)return'';
  const d=new Date(fr.yr,fr.mo-1,fr.day);d.setDate(d.getDate()-d.getDay());
  return`wr_${d.getFullYear()}_${String(d.getMonth()+1).padStart(2,'0')}_${String(d.getDate()).padStart(2,'0')}`;
}
function renderWeekNavBar(weeks,localIdx){
  const nb=document.getElementById('week-nav-bar');if(!nb)return;
  nb.style.display='block';
  if(!weeks.length){nb.innerHTML='';return;}
  const gw=buildGlobalWeeks();
  const curIdx=activeWeekIdx??getThisWeekIdx();
  const isThis=curIdx===getThisWeekIdx();
  const atStart=curIdx<=0,atEnd=curIdx>=gw.length-1;
  const btn=(lbl,dir,dis)=>`<button onclick="${dis?'':'navWeek('+dir+')'}" style="padding:5px 14px;border:1px solid var(--border);border-radius:7px;font-size:12px;font-weight:600;cursor:${dis?'default':'pointer'};background:var(--card);color:${dis?'var(--muted)':'var(--text)'};opacity:${dis?'0.4':'1'}">${lbl}</button>`;
  const thisBtn=`<button onclick="navWeek(0)" style="padding:5px 14px;border:1px solid ${isThis?'var(--accent)':'var(--border)'};border-radius:7px;font-size:12px;font-weight:700;cursor:pointer;background:${isThis?'var(--accent)':'var(--card)'};color:${isThis?'#fff':'var(--text)'}">${isKo()?'이번 주':'This Week'}</button>`;
  const focusLabel=weeks[localIdx]?.label||'';
  nb.innerHTML=`<div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;padding:8px 14px;background:var(--card);border:1px solid var(--border);border-radius:10px;margin-bottom:6px">${btn(isKo()?'◀ 이전 주':'◀ Prev',-1,atStart)}${thisBtn}${btn(isKo()?'다음 주 ▶':'Next ▶',1,atEnd)}<span style="font-size:12px;font-weight:600;color:var(--text);margin-left:4px">📅 ${focusLabel}</span><button onclick="activeWeekIdx=null;render()" style="margin-left:auto;padding:5px 12px;border:1px solid var(--border);border-radius:7px;font-size:11px;cursor:pointer;background:var(--card);color:var(--muted)">${isKo()?'전체 보기':'All Weeks'}</button></div>`;
}
function renderWeekly(){
  // 날짜 범위가 있으면 그 범위, 없으면 전체 데이터
  const scopeRows = (rangeFrom||rangeTo) ? rangedData() : allData;
  const weeks = getAllWeeks(scopeRows);
  const cT = scopeRows.length ? agg(scopeRows) : emptyT();
  const rate = avgRate(cT);
  document.getElementById('topbar-badge').textContent=T('weekly');

  // ② 리뷰 포커스 주 결정 (activeWeekIdx 또는 기본=마지막 주)
  let localIdx=weeks.length-1;
  if(activeWeekIdx!==null){
    const gw=buildGlobalWeeks();
    const gwk=gw[activeWeekIdx]?.key;
    if(gwk){const fi=weeks.findIndex(w=>_weekKey(w)===gwk);if(fi>=0)localIdx=fi;}
  }
  const focusedWeek=weeks[localIdx]||null;

  renderWeekNavBar(weeks,localIdx);
  renderWeeklyBanner(rate);
  renderKPIs(cT,null); renderRatios(cT);
  renderTrendChart(weeks.map(w=>w.label),weeks.map(w=>w.t),T('weeklyTrend'));
  renderDonut(cT,rate);
  renderWeeklyReview(focusedWeek?[focusedWeek]:[]);

  // ③ 테이블: 전체 주차 표시, 포커스 주 하이라이트
  const fLabel=focusedWeek?.label;
  document.getElementById('summary-section').innerHTML=`<div class="section-title">${T('weeklySummary')} (${weeks.length})</div>
    <div class="table-wrap"><table><thead><tr><th>${T('week')}</th><th>${T('totalSales')}</th><th>${T('organic')}</th><th>${T('adSales')}</th><th>${T('adSpend')}</th><th>${T('roas')}</th><th>${T('acos')}</th><th>${T('troas')}</th><th>${T('tacos')}</th><th>${T('orders')}</th><th>${T('vsPrev')}</th></tr></thead><tbody>${
    weeks.map((w,i)=>{
      const totalRoas=w.t.adSpend>0?w.t.sales/w.t.adSpend:0;
      const totalAcos=w.t.sales>0?w.t.adSpend/w.t.sales*100:0;
      const adRoas=w.t.adSpend>0?w.t.adSales/w.t.adSpend:0;
      const adAcos=w.t.adSales>0?w.t.adSpend/w.t.adSales*100:0;
      const pv=weeks[i-1];const hc=w.t.sales>0,hp=pv&&pv.t.sales>0;
      const{cls,txt}=(hc&&hp)?chg(w.t.sales,pv.t.sales,false):{cls:'neutral',txt:'—'};
      const bc=cls==='up'?'badge-up':cls==='down'?'badge-down':'badge-neu';
      const crossNote=w.crossMonth?` <span style="font-size:10px;color:#64748b">(전월 포함)</span>`:'';
      const isFocus=w.label===fLabel;
      const rowStyle=(isFocus?'outline:2px solid var(--accent);outline-offset:-2px;':'')+(w.crossMonth?'background:#fafafa;':'');
      return `<tr style="${rowStyle}"><td>${w.label}${crossNote}</td><td><strong style="color:#1d4ed8">${fmtAgg(w.t.sales,rate.krw,rate.sgd)}</strong></td><td>${fmtAgg(w.t.organic,rate.krw,rate.sgd)}</td><td>${fmtAgg(w.t.adSales,rate.krw,rate.sgd)}</td><td>${fmtAgg(w.t.adSpend,rate.krw,rate.sgd)}</td><td>${fmtRoas(totalRoas)}</td><td>${fmtAcos(totalAcos)}</td><td>${fmtRoas(adRoas)}</td><td>${adAcos>0?fmtAcos(adAcos):'—'}</td><td>${fmtN(w.t.orders)}</td><td><span class="badge ${bc}">${txt}</span></td></tr>`;}).join('')
  }</tbody></table></div>`;
}
function buildMonthWeeks(sortedInMonth,dim,cur){
  // Full Sunday-to-Saturday weeks containing current month days
  // Includes cross-month days (risk: weekly sum may differ from monthly KPI total)
  if(!sortedInMonth.length)return[];
  const yr=cur.yr,mo=cur.mo;
  const firstDow=new Date(yr,mo-1,1).getDay(); // 0=Sun
  const weeks=[];
  let wStart=1-firstDow; // Sun of week containing day 1 (may be <=0 = prev month)
  while(wStart<=dim){
    // Full week Sun~Sat
    const weekSunDate=new Date(yr,mo-1,wStart);
    const weekSatDate=new Date(yr,mo-1,wStart+6);
    // Get ALL allData days in this Sun-Sat span
    const fullRows=allData.filter(d=>{
      const dd=new Date(d.yr,d.mo-1,d.day);
      return dd>=weekSunDate&&dd<=weekSatDate;
    });
    if(fullRows.length){
      const fr=fullRows[0],lr=fullRows[fullRows.length-1];
      const gwd=getGlobalWeek(weekSunDate);
      const label=`${isKo()?'W'+gwd+'주':'W'+String(gwd).padStart(2,'0')} (${fr.mo}/${fr.day}~${lr.mo}/${lr.day})`;
      // Mark which rows are from another month
      weeks.push({label,t:agg(fullRows),rows:fullRows,crossMonth:fullRows.some(r=>r.mo!==mo),wSun:weekSunDate,wSat:weekSatDate});
    }
    wStart+=7;
  }
  return weeks;
}
function getAllWeeks(data){
  const f=data.slice().sort((a,b)=>new Date(a.yr,a.mo-1,a.day)-new Date(b.yr,b.mo-1,b.day));
  if(!f.length)return [];
  const fd=new Date(f[0].yr,f[0].mo-1,f[0].day);const dw=fd.getDay();const back=dw;const ws=new Date(fd);ws.setDate(ws.getDate()-back);
  const ld=new Date(f[f.length-1].yr,f[f.length-1].mo-1,f[f.length-1].day);
  const weeks=[];let cur=new Date(ws);
  while(cur<=ld){const we=new Date(cur);we.setDate(we.getDate()+6);const wr=f.filter(d=>{const dd=new Date(d.yr,d.mo-1,d.day);return dd>=cur&&dd<=we});if(wr.length){const a=wr[0],b=wr[wr.length-1];const wd=new Date(a.yr,a.mo-1,a.day);const gwn=wGlobalName(wd);weeks.push({label:`${gwn} (${a.mo}/${a.day}~${b.mo}/${b.day})`,t:agg(wr),rows:wr})}cur.setDate(cur.getDate()+7);}
  return weeks;
}

// ──── DAILY ────────────────────────────────────────────────────────
function renderDaily(){
  const _rs=document.getElementById('review-section');if(_rs)_rs.innerHTML='';_hideWeekNav();
  // 날짜 범위가 설정되어 있으면 rangeFrom 기준으로 activeMonth 자동 도출
  if(rangeFrom){const _d=new Date(rangeFrom+'T00:00:00');const _mk=_d.getFullYear()+'.'+((_d.getMonth()+1));if(byMonth[_mk])activeMonth=_mk;}
  const cur=byMonth[activeMonth]; const rows=cur.rows.filter(inRange);
  const cT=rows.length?agg(rows):emptyT(); const rate=avgRate(cT);
  const sorted=rows.slice().sort((a,b)=>a.day-b.day);
  const dim=new Date(cur.yr,cur.mo,0).getDate();const cd=Math.max(1,sorted.length);const proj=calcProjSales(cT.sales,sorted,cur.yr,cur.mo,dim);
  document.getElementById('topbar-badge').textContent=ymName(cur.yr,cur.mo)+' '+T('daily');
  renderBanner(cur,cT,rate,cd,dim,proj);
  renderKPIs(cT,null); renderRatios(cT);
  const salesD=sorted.map(r=>r.sales+(vineMode==='exclude'?(r.vine_adj||0):0));
  const adD=sorted.map(r=>r.adSales);
  const orgD=sorted.map(r=>r.organic+(vineMode==='exclude'?(r.vine_adj||0):0));
  const adSpD=sorted.map(r=>r.adSpend);
  // Daily 차트: 다른 탭과 동일한 양식 사용
  const buckets=sorted.map((r,i)=>({sales:salesD[i],adSales:r.adSales,organic:orgD[i],adSpend:r.adSpend}));
  renderTrendChart(sorted.map(r=>r.mo+'/'+r.day),buckets,T('dailyTrend'));
  renderDonut(cT,rate);
  // weekly mini summary — Weekly와 동일한 컬럼
  const weeks=buildMonthWeeks(sorted,dim,cur);
  const caToday=getCaToday();
  document.getElementById('summary-section').innerHTML=`<div class="section-title">${T('weeklySummary')}</div><div class="table-wrap"><table><thead><tr><th>${T('week')}</th><th>${T('totalSales')}</th><th>${T('projSales')}</th><th>${T('organic')}</th><th>${T('adSales')}</th><th>${T('adSpend')}</th><th>${T('roas')}</th><th>${T('acos')}</th><th>${T('troas')}</th><th>${T('tacos')}</th><th>${T('orders')}</th></tr></thead><tbody>${weeks.map(w=>{
    const totalRoas=w.t.adSpend>0?w.t.sales/w.t.adSpend:0;
    const totalAcos=w.t.sales>0?w.t.adSpend/w.t.sales*100:0;
    const adRoas=w.t.adSpend>0?w.t.adSales/w.t.adSpend:0;
    const adAcos=w.t.adSales>0?w.t.adSpend/w.t.adSales*100:0;
    // 예상 매출: 주가 완료됐으면 — , 진행 중이면 일평균×7
    const isComplete=w.wSat&&w.wSat<caToday;
    let projCell='—';
    if(!isComplete&&w.t.sales>0){
      const elapsedRows=w.rows.filter(r=>new Date(r.yr,r.mo-1,r.day)<=caToday);
      const daysElapsed=Math.max(1,elapsedRows.length);
      const dailyAvg=w.t.sales/daysElapsed;
      const weights=getDowWeights();
      // 남은 날(wSat까지) 요일 가중치 합산
      let proj=w.t.sales;
      if(w.wSun&&w.wSat){
        for(let d=new Date(w.wSun);d<=w.wSat;d.setDate(d.getDate()+1)){
          if(d>caToday) proj+=dailyAvg*weights[d.getDay()];
        }
      } else { proj=w.t.sales/daysElapsed*7; }
      projCell=`<span style="color:var(--accent)">${fmtAgg(proj,rate.krw,rate.sgd)}</span>`;
    }
    return `<tr><td>${w.label}</td><td><strong style="color:#1d4ed8">${fmtAgg(w.t.sales,rate.krw,rate.sgd)}</strong></td><td>${projCell}</td><td>${fmtAgg(w.t.organic,rate.krw,rate.sgd)}</td><td>${fmtAgg(w.t.adSales,rate.krw,rate.sgd)}</td><td>${fmtAgg(w.t.adSpend,rate.krw,rate.sgd)}</td><td>${fmtRoas(totalRoas)}</td><td>${fmtAcos(totalAcos)}</td><td>${fmtRoas(adRoas)}</td><td>${adAcos>0?fmtAcos(adAcos):'—'}</td><td>${fmtN(w.t.orders)}</td></tr>`;}).join('')}</tbody></table></div>`;
  // daily detail
  const hasEvt=SPECIAL_EVENTS.some(e=>e.yr===cur.yr&&e.mo===cur.mo);
  const evtNote=hasEvt?SPECIAL_EVENTS.filter(e=>e.yr===cur.yr&&e.mo===cur.mo).map(e=>`<div class="evt-note">⚠️ ${T('idVerify')}: ${e.yr}/${e.mo}/${e.day_start}~${e.day_end}</div>`).join(''):'';
  document.getElementById('daily-section').innerHTML=`${evtNote}<div class="section-title">${T('dailyDetail')}</div>
    <div class="daily-sticky"><table><thead><tr><th style="text-align:left;width:56px">${T('date')}</th><th style="width:34px">${T('dow')}</th><th>${T('totalSales')}</th><th>${T('organic')}</th><th>${T('adSales')}</th><th>${T('adSpend')}</th><th>${T('roas')}</th><th>${T('acos')}</th><th>${T('troas')}</th><th>${T('tacos')}</th><th>${T('orders')}</th><th>${T('session')}</th></tr></thead><tbody>${dailyRowsHTML(sorted,rate,cur)}</tbody></table></div>`;
}
function dailyRowsHTML(rows,rate,cur){
  const vd=new Set(VINE_ITEMS.filter(v=>v.yr===cur.yr&&v.mo===cur.mo).map(v=>v.day));
  let html='';
  rows.forEach(r=>{
    const ua=vineMode==='exclude';
    const aS=ua?r.sales+(r.vine_adj||0):r.sales, aO=ua?r.organic+(r.vine_adj||0):r.organic;
    const totalRoas=r.adSpend>0?r.sales/r.adSpend:0, totalAcos=r.sales>0?r.adSpend/r.sales*100:0;
    const adRoas=r.adSpend>0?r.adSales/r.adSpend:0, adAcos=r.adSales>0?r.adSpend/r.adSales*100:0;
    const dk=dowName(r.dow);
    const isSun=['일','Sun'].includes(dk), isSat=['토','Sat'].includes(dk);
    const evt=SPECIAL_EVENTS.find(e=>e.yr===r.yr&&e.mo===r.mo&&r.day>=e.day_start&&r.day<=e.day_end);
    const rc=totalRoas>=2?'pos':totalRoas>=1?'':totalRoas>0?'neg':'dim';
    const ac=totalAcos>0&&totalAcos<50?'pos':totalAcos<80?'':totalAcos>0?'neg':'dim';
    const tag=evt?` <span style="font-size:9px;color:#fb923c;border:1px solid rgba(251,146,60,.5);border-radius:3px;padding:0 3px">⚠️ ${T('idVerify')}</span>`:'';
    html+=`<tr style="${evt?'background:rgba(251,146,60,.06)':''}"><td class="col-date">${r.mo}/${r.day}${tag}</td><td class="col-dow" style="text-align:center;color:${isSun?'var(--red)':isSat?'#2563eb':'var(--muted)'}">${dk}</td><td style="font-weight:600;color:${aS<0?'var(--red)':'#1d4ed8'}">${fmtAgg(aS,rate.krw,rate.sgd)}</td><td style="color:${aO<0?'var(--red)':''}">${fmtAgg(aO,rate.krw,rate.sgd)}</td><td style="color:${r.adSales<0?'var(--red)':''}">${fmtAgg(r.adSales,rate.krw,rate.sgd)}</td><td style="color:${r.adSpend>0?'var(--text)':'var(--muted)'}">${fmtAgg(r.adSpend,rate.krw,rate.sgd)}</td><td class="${rc}">${fmtRoas(totalRoas)}</td><td class="${ac}">${totalAcos>0?fmtAcos(totalAcos):'—'}</td><td>${adRoas>0?fmtRoas(adRoas):'—'}</td><td>${adAcos>0?fmtAcos(adAcos):'—'}</td><td>${fmtN(r.orders)}</td><td>${fmtN(r.sessions)}</td></tr>`;
    if(vd.has(r.day)){VINE_ITEMS.filter(v=>v.yr===r.yr&&v.mo===r.mo&&v.day===r.day).forEach(v=>{html+=`<tr class="vine-row"><td colspan="10"><span class="vine-badge">🌿 VINE</span> ${v.desc} — ${fmtAgg(v.adj,rate.krw,rate.sgd)}</td></tr>`;});}
  });
  return html;
}

// ──── BANNER ───────────────────────────────────────────────────────
function renderBanner(cur,cT,rate,cd,dim,proj){
  const conf=isConfirmed(cur.yr,cur.mo);
  const vine=cT.vineTotal<0?`<div class="vine-note-banner">${T('vineIncluded')}: ${fmtAgg(cT.vineTotal,rate.krw,rate.sgd)}</div>`:'';
  if(conf){
    document.getElementById('top-banner').innerHTML=`<div class="banner-confirmed"><div><div class="banner-label">✅ ${ymName(cur.yr,cur.mo)} ${T('confMonthTitle')}</div><div class="banner-value">${fmtAgg(cT.sales,rate.krw,rate.sgd)}</div>${vine}</div><div class="banner-right"><div class="banner-month">${ymName(cur.yr,cur.mo)}</div><div class="banner-days">${T('confirmed')}</div></div></div>`;
  } else {
    document.getElementById('top-banner').innerHTML=`<div class="banner-projected"><div><div class="banner-label">🎯 ${T('projMonth')}</div><div class="banner-value">${fmtAgg(proj,rate.krw,rate.sgd)}</div><div class="banner-meta">${T('dailyAvg')} ${fmtAgg(cT.sales/cd,rate.krw,rate.sgd)} × ${dim}${T('days')}</div>${vine}</div><div class="banner-right"><div class="banner-month">${ymName(cur.yr,cur.mo)}</div><div class="banner-days">${T('confDays')} ${cd} / ${T('totalDays')} ${dim}</div></div></div>`;
  }
}

// ──── WEEKLY PROJECTION ────────────────────────────────────────────
function calcWeeklyProjection(){
  const sorted=allData.slice().sort((a,b)=>new Date(a.yr,a.mo-1,a.day)-new Date(b.yr,b.mo-1,b.day));
  if(!sorted.length)return null;
  // Last 3 weeks = last 21 calendar days that have any activity
  const active=sorted.filter(r=>r.sales>0||r.adSpend>0||r.sessions>0);
  const last21=active.slice(-21);
  if(!last21.length)return null;
  // DOW averages from last 21 days
  const dowS=[0,0,0,0,0,0,0],dowN=[0,0,0,0,0,0,0];
  last21.forEach(r=>{const d=new Date(r.yr,r.mo-1,r.day).getDay();dowS[d]+=r.sales;dowN[d]++;});
  const dowAvg=dowS.map((s,i)=>dowN[i]>0?s/dowN[i]:0);
  const last21Avg=last21.reduce((s,r)=>s+r.sales,0)/last21.length;
  const dowMult=dowAvg.map(v=>last21Avg>0?v/last21Avg:1);
  // Previous month daily avg
  const today=new Date();
  const prevMoNum=today.getMonth()===0?12:today.getMonth(); // getMonth() is 0-indexed, so Jan=0 means prev=Dec(12)
  const prevMoYr=today.getMonth()===0?today.getFullYear()-1:today.getFullYear();
  const prevKey=prevMoYr+'_'+String(prevMoNum).padStart(2,'0');
  const prevRows=(byMonth[prevKey]?.rows||[]);
  const prevT=prevRows.length?agg(prevRows):null;
  const prevDailyAvg=prevT&&prevRows.length>0?prevT.sales/prevRows.length:last21Avg;
  // Base = blend of prev month daily avg and last-21 daily avg
  const base=(prevDailyAvg+last21Avg)/2;
  // Current week (Sun~Sat containing today)
  const todayMidnight=new Date(today.getFullYear(),today.getMonth(),today.getDate());
  const wSun=new Date(todayMidnight);wSun.setDate(todayMidnight.getDate()-todayMidnight.getDay());
  let projTotal=0,actualTotal=0,projDays=0;
  const dayRows=[];
  for(let i=0;i<7;i++){
    const d=new Date(wSun);d.setDate(wSun.getDate()+i);
    const actual=allData.find(r=>r.yr===d.getFullYear()&&r.mo===d.getMonth()+1&&r.day===d.getDate());
    const dow=d.getDay();
    const est=Math.max(0,base*dowMult[dow]);
    if(actual){actualTotal+=actual.sales;projTotal+=actual.sales;}
    else{projTotal+=est;projDays++;}
    dayRows.push({d,dow,actual,est});
  }
  return{proj:projTotal,actualTotal,projDays,base,prevDailyAvg,last21Avg,dowMult,dayRows,wSun,prevMoNum,prevMoYr};
}
// ──── GLOBAL WEEK NAVIGATION ───────────────────────────────────────
function buildGlobalWeeks(){
  if(_gwCache)return _gwCache;
  const sorted=allData.slice().sort((a,b)=>new Date(a.yr,a.mo-1,a.day)-new Date(b.yr,b.mo-1,b.day));
  if(!sorted.length)return(_gwCache=[]);
  const first=sorted[0],last=sorted[sorted.length-1];
  const d0=new Date(first.yr,first.mo-1,first.day);
  d0.setDate(d0.getDate()-d0.getDay()); // go to Sunday
  const dEnd=new Date(last.yr,last.mo-1,last.day);
  const weeks=[];
  for(let sun=new Date(d0);sun<=dEnd;sun.setDate(sun.getDate()+7)){
    const wSun=new Date(sun);
    const wSat=new Date(sun);wSat.setDate(sun.getDate()+6);
    const rows=allData.filter(r=>{const d=new Date(r.yr,r.mo-1,r.day);return d>=wSun&&d<=wSat;});
    const t=rows.length?agg(rows):null;
    const hasSales=t&&(t.sales>0||t.adSpend>0||t.sessions>0);
    const label=`${wSun.getMonth()+1}/${wSun.getDate()}~${wSat.getMonth()+1}/${wSat.getDate()}`;
    const key=`wr_${wSun.getFullYear()}_${String(wSun.getMonth()+1).padStart(2,'0')}_${String(wSun.getDate()).padStart(2,'0')}`;
    weeks.push({wSun:new Date(wSun),wSat:new Date(wSat),label,key,rows,t,hasSales});
  }
  return(_gwCache=weeks);
}
function getThisWeekIdx(){
  const gw=buildGlobalWeeks();
  const today=new Date();today.setHours(0,0,0,0);
  // find week containing today, else last week with data
  let idx=gw.findIndex(w=>today>=w.wSun&&today<=w.wSat);
  if(idx<0)idx=gw.map((w,i)=>({i,h:w.hasSales})).filter(x=>x.h).pop()?.i??gw.length-1;
  return idx;
}
function navWeek(dir){
  // dir: 0=이번주, -1=이전주, 1=다음주
  const gw=buildGlobalWeeks();
  if(dir===0){activeWeekIdx=getThisWeekIdx();}
  else{
    if(activeWeekIdx===null)activeWeekIdx=getThisWeekIdx();
    activeWeekIdx=Math.max(0,Math.min(gw.length-1,activeWeekIdx+dir));
  }
  render(); // activeMonth 변경 없이 리뷰 포커스만 이동
}
function weekNavBtns(curIdx){
  const gw=buildGlobalWeeks();
  const thisIdx=getThisWeekIdx();
  const w=gw[curIdx]||gw[gw.length-1];
  const isThis=curIdx===thisIdx;
  const btn=(lbl,dir,disabled)=>`<button onclick="${disabled?'':'navWeek('+dir+')'}" style="padding:5px 14px;border:1px solid var(--border);border-radius:7px;font-size:12px;font-weight:600;cursor:${disabled?'default':'pointer'};background:var(--card);color:${disabled?'var(--muted)':'var(--text)'};opacity:${disabled?'0.4':'1'}">${lbl}</button>`;
  const thisBtn=`<button onclick="navWeek(0)" style="padding:5px 14px;border:1px solid ${isThis?'var(--accent)':'var(--border)'};border-radius:7px;font-size:12px;font-weight:700;cursor:pointer;background:${isThis?'var(--accent)':'var(--card)'};color:${isThis?'#fff':'var(--text)'}">${isKo()?'이번 주':'This Week'}</button>`;
  return `<div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;padding:8px 14px;background:var(--card);border:1px solid var(--border);border-radius:10px;margin-bottom:8px">
    ${btn((isKo()?'◀ 이전 주':'◀ Prev'),-1,curIdx<=0)}
    ${thisBtn}
    ${btn((isKo()?'다음 주 ▶':'Next ▶'),1,curIdx>=gw.length-1)}
    <span style="font-size:12px;font-weight:600;color:var(--text);margin-left:4px">📅 ${w.label}</span>
    <button onclick="activeWeekIdx=null;render()" style="margin-left:auto;padding:5px 12px;border:1px solid var(--border);border-radius:7px;font-size:11px;cursor:pointer;background:var(--card);color:var(--muted)">${isKo()?'전체 보기':'All Weeks'}</button>
  </div>`;
}

function renderWeeklyBanner(rate){
  // 이번 주 예상 매출 배너 (nav 버튼은 week-nav-bar에 분리)
  const wp=calcWeeklyProjection();
  if(!wp){document.getElementById('top-banner').innerHTML='';return;}
  const sym=activeCurrency==='KRW'?'₩':activeCurrency==='SGD'?'S$':'$';
  const cr=getRate(wp.prevMoYr,wp.prevMoNum);
  const fmt=v=>activeCurrency==='USD'?sym+Math.round(v).toLocaleString():activeCurrency==='KRW'?'₩'+Math.round(v*cr).toLocaleString():'S$'+Math.round(v*1.34).toLocaleString();
  const wEnd=new Date(wp.wSun);wEnd.setDate(wp.wSun.getDate()+6);
  const wLabel=`${wp.wSun.getMonth()+1}/${wp.wSun.getDate()}~${wEnd.getMonth()+1}/${wEnd.getDate()}`;
  const metaKo=`직전달 일평균 ${fmt(wp.prevDailyAvg)} · 최근3주 ${fmt(wp.last21Avg)} · 요일패턴 반영`;
  const metaEn=`Prev mo avg ${fmt(wp.prevDailyAvg)} · Last 3wk avg ${fmt(wp.last21Avg)} · DOW pattern`;
  document.getElementById('top-banner').innerHTML=`<div class="banner-projected"><div><div class="banner-label">🗓️ ${T('projWeek')}</div><div class="banner-value">${fmt(wp.proj)}</div><div class="banner-meta">${isKo()?metaKo:metaEn}</div></div><div class="banner-right"><div class="banner-month">${wLabel}</div><div class="banner-days">${isKo()?'확정':'Actual'} ${fmt(wp.actualTotal)} / ${isKo()?'예측':'Est'} ${wp.projDays}${isKo()?'일':'d'}</div></div></div>`;
}

// ──── CHARTS ───────────────────────────────────────────────────────
function chartOpts(){return{responsive:true,maintainAspectRatio:false,animation:false,
  interaction:{mode:'nearest',intersect:true},
  plugins:{
    legend:{labels:{color:'#475569',boxWidth:10,font:{size:11}}},
    tooltip:{
      enabled:true,
      backgroundColor:'#fff',borderColor:'#e2e8f0',borderWidth:1,
      titleColor:'#0f172a',bodyColor:'#334155',
      padding:10,
      callbacks:{label:c=>{
        const sym=activeCurrency==='KRW'?'₩':activeCurrency==='SGD'?'S$':'$';
        const v=Math.round(c.raw||0).toLocaleString('en-US');
        return ` ${c.dataset.label}: ${sym}${v}`;
      }}
    }
  },
  scales:{x:{ticks:{color:'#64748b',font:{size:9},maxRotation:45},grid:{color:'#f1f5f9'}},y:{ticks:{color:'#64748b',callback:v=>{const sym=activeCurrency==='KRW'?'₩':activeCurrency==='SGD'?'S$':'$';if(v===0)return sym+'0';return Math.abs(v)>=1000?sym+Math.round(v/1000)+'k':sym+Math.round(v);}},grid:{color:'#e2e8f0'}}}
};}
// aggregate-based trend (currency-converted via avg rate of each bucket)
function renderTrendChart(labels,buckets,title,overrideSales,highlightIdx){
  const r=v=>activeCurrency==='USD'?v:(activeCurrency==='KRW'?v*1490:v*1.34);
  const salesD=(overrideSales||buckets.map(t=>t.sales)).map(r);
  const adD=buckets.map(t=>t.adSales).map(r);
  const orgD=buckets.map(t=>t.organic).map(r);
  const adSpD=buckets.map(t=>t.adSpend).map(r);
  document.getElementById('chart-main-title').textContent=title;
  drawChart(labels,salesD,adD,orgD,adSpD,null,highlightIdx);
}
function renderTrendChartRaw(labels,salesD,adD,orgD,title,sortedRows,adSpD){
  const cur=byMonth[activeMonth];const cr=cur?getRate(cur.yr,cur.mo):1;
  const sym=activeCurrency==='KRW'?'₩':activeCurrency==='SGD'?'S$':'$';
  if(mainCI)mainCI.destroy();
  document.getElementById('chart-main-title').textContent=title;
  const s=salesD.map(v=>v*cr), o=orgD.map(v=>v*cr), sp=(adSpD||[]).map(v=>v*cr);
  const roasD=(sortedRows||[]).map(r=>r.adSpend>0?Math.round(r.adSales/r.adSpend*100):null);
  const ds=[
    {type:'bar',label:T('totalSales'),data:s,backgroundColor:'rgba(59,130,246,.75)',yAxisID:'y',borderRadius:4,order:4},
    {type:'bar',label:T('organic'),data:o,backgroundColor:'rgba(251,191,36,.75)',yAxisID:'y',borderRadius:4,order:5},
    {type:'line',label:T('adSpend'),data:sp,borderColor:'#ef4444',backgroundColor:'rgba(239,68,68,.08)',yAxisID:'y2',tension:.4,borderWidth:2,pointRadius:3,fill:false,order:2},
    {type:'line',label:'ROAS',data:roasD,borderColor:'#a855f7',backgroundColor:'rgba(168,85,247,.08)',yAxisID:'y2',tension:.4,borderWidth:2,pointRadius:3,fill:false,spanGaps:true,order:1},
  ];
  mainCI=new Chart(document.getElementById('mainChart').getContext('2d'),{
    data:{labels,datasets:ds},
    options:{responsive:true,maintainAspectRatio:false,animation:false,spanGaps:true,
      interaction:{mode:'index',intersect:false},
      plugins:{legend:{labels:{color:'#475569',boxWidth:10,font:{size:11}}},
        tooltip:{backgroundColor:'#fff',borderColor:'#e2e8f0',borderWidth:1,titleColor:'#0f172a',bodyColor:'#334155',padding:10,
          callbacks:{label:c=>c.dataset.label==='ROAS'?(' ROAS: '+(c.raw==null?'—':c.raw+'%')):(' '+c.dataset.label+': '+sym+Math.round(c.raw||0).toLocaleString())}}},
      scales:{
        x:{ticks:{color:'#64748b',font:{size:9},maxRotation:45},grid:{color:'#f1f5f9'}},
        y:{position:'left',title:{display:true,text:isKo()?'매출':'Sales',color:'#94a3b8',font:{size:10}},
          ticks:{color:'#3b82f6',callback:v=>v===0?sym+'0':Math.abs(v)>=1000?sym+Math.round(v/1000)+'k':sym+Math.round(v)},grid:{color:'#e2e8f0'}},
        y2:{position:'right',title:{display:true,text:isKo()?'광고비/ROAS':'Spend/ROAS',color:'#94a3b8',font:{size:10}},
          ticks:{color:'#ef4444',callback:v=>Math.round(v)},grid:{drawOnChartArea:false}}
      }
    }
  });
}
function drawChart(labels,salesD,adD,orgD,adSpD,sortedRows,highlightIdx){
  if(mainCI)mainCI.destroy();
  const isBar=chartType==='bar', isMix=chartType==='mix';
  const hasHi=highlightIdx!==null&&highlightIdx!==undefined;
  const ptC=sortedRows?sortedRows.map(r=>{if(SPECIAL_EVENTS.some(e=>r.yr===e.yr&&r.mo===e.mo&&r.day>=e.day_start&&r.day<=e.day_end))return'#fb923c';if(vineMode==='exclude'&&(r.vine_adj||0)<0)return'#ef4444';return'#3b82f6'}):null;
  const ptS=sortedRows?sortedRows.map(r=>{if(SPECIAL_EVENTS.some(e=>r.yr===e.yr&&r.mo===e.mo&&r.day>=e.day_start&&r.day<=e.day_end))return 6;if(vineMode==='exclude'&&(r.vine_adj||0)<0)return 7;return 3}):null;
  const barBg=k=>{
    if(!hasHi||(!(isBar||isMix))) return ({bar:`rgba(${k},.7)`,mix:`rgba(${k},.7)`,line:`rgba(${k},.12)`})[chartType]||`rgba(${k},.7)`;
    return labels.map((_,i)=>i===highlightIdx?`rgba(${k},.85)`:`rgba(${k},.18)`);
  };
  const ds=[
    {label:T('totalSales'),data:salesD,borderColor:'#3b82f6',backgroundColor:barBg('59,130,246'),fill:false,tension:.4,borderWidth:2,pointRadius:ptS||3,pointBackgroundColor:ptC||'#3b82f6',borderRadius:(isBar||isMix)?4:0},
    {label:T('adSales'),data:adD,borderColor:'#22c55e',backgroundColor:barBg('34,197,94'),fill:false,tension:.4,borderWidth:2,pointRadius:3,borderRadius:(isBar||isMix)?4:0},
    {label:T('organic'),data:orgD,borderColor:'#fbbf24',backgroundColor:barBg('251,191,36'),fill:false,tension:.4,borderWidth:2,pointRadius:3,borderRadius:(isBar||isMix)?4:0},
  ];
  if(adSpD){
    const spDs={label:T('adSpend'),data:adSpD,borderColor:'#ef4444',backgroundColor:'rgba(239,68,68,.08)',fill:false,tension:.4,borderWidth:2,pointRadius:3,borderDash:isBar?[]:[6,3]};
    if(isMix){spDs.type='line';spDs.yAxisID='y2';}else{spDs.backgroundColor=barBg('239,68,68');spDs.borderRadius=isBar?4:0;}
    ds.push(spDs);
  }
  const opts=chartOpts();
  if(isMix&&adSpD){opts.scales=opts.scales||{};opts.scales.y2={position:'right',title:{display:true,text:isKo()?'광고비':'Ad Spend',color:'#94a3b8',font:{size:10}},ticks:{color:'#ef4444'},grid:{drawOnChartArea:false}};}
  mainCI=new Chart(document.getElementById('mainChart').getContext('2d'),{type:(isBar||isMix)?'bar':'line',data:{labels,datasets:ds},options:opts});
}
function renderDonut(cT,rate){
  if(donutCI)donutCI.destroy();
  donutCI=new Chart(document.getElementById('donutChart').getContext('2d'),{type:'doughnut',
    data:{labels:[T('adSales'),T('organic')],datasets:[{data:[cT.adSales,cT.organic],backgroundColor:['#22c55e','#fbbf24'],borderWidth:0,hoverOffset:5}]},
    options:{responsive:true,maintainAspectRatio:false,animation:false,cutout:'65%',plugins:{legend:{position:'bottom',labels:{color:'#475569',boxWidth:10,font:{size:11}}},tooltip:{backgroundColor:'#1e293b',borderColor:'#334155',borderWidth:1,callbacks:{label:c=>{const t=c.dataset.data.reduce((a,b)=>a+b,0);const p=t>0?(c.raw/t*100).toFixed(1):0;return ` ${c.label}: $${Math.round(c.raw).toLocaleString()} (${p}%)`}}}}}});
}

// ──── FOLDER ACCESS (File System Access API) ─────────────────────────
let folderHandle = null;
const FS_HANDLE_KEY = 'jb_folder_handle_name';

async function openFolderAccess() {
  if (!('showDirectoryPicker' in window)) {
    alert(isKo()?'이 기능은 Chrome/Edge 최신 버전에서만 지원됩니다.':'Requires Chrome/Edge.');
    return;
  }
  try {
    folderHandle = await window.showDirectoryPicker({mode:'readwrite'});
    localStorage.setItem(FS_HANDLE_KEY, folderHandle.name);
    showFolderStatus(folderHandle.name);
    await scanFolder();
  } catch(e) { if(e.name!=='AbortError') alert('폴더 접근 오류: '+e.message); }
}

function showFolderStatus(name) {
  const fs = document.getElementById('folder-status');
  const fn = document.getElementById('folder-name');
  if(fs && fn){ fs.style.display='block'; fn.textContent=name; }
}

async function scanFolder() {
  if(!folderHandle){ alert(isKo()?'먼저 폴더를 지정해주세요.':'Please select a folder first.'); return; }
  const found=[], salesFiles=[], backupFiles=[];
  // Recursive scan — no requestPermission (inherits from parent)
  const scanDir = async (dirHandle, depth=0, path='') => {
    if(depth>5) return;
    try {
      for await (const entry of dirHandle.values()) {
        const fullPath = path + entry.name;
        if(entry.kind==='directory') {
          await scanDir(entry, depth+1, fullPath+'/');
        } else {
          const low = entry.name.toLowerCase();
          console.log('[scan file]', fullPath);
          if(low.endsWith('.xlsx')||low.endsWith('.xls')||low.endsWith('.csv'))
            salesFiles.push({name:fullPath, handle:entry});
          if(low.startsWith('jb_dashboard_backup')&&low.endsWith('.json'))
            backupFiles.push({name:fullPath, handle:entry});
        }
      }
    } catch(e) { console.warn('[scan skip]', path, ':', e.message); }
  };
  await scanDir(folderHandle);
  console.log('[scan done] folder:', folderHandle.name,
    '| sales:', salesFiles.map(f=>f.name),
    '| backups:', backupFiles.map(f=>f.name));

  if(!salesFiles.length && !backupFiles.length){
    // Debug: show everything that was found (any file type)
    const allFound = [];
    const scanAll = async (dh, depth=0, path='') => {
      if(depth>5) return;
      try {
        for await (const entry of dh.values()) {
          const fp = path+entry.name;
          if(entry.kind==='directory') { await scanAll(entry, depth+1, fp+'/'); }
          else { allFound.push(fp); }
        }
      } catch(e){ allFound.push('[error: '+path+' '+e.message+']'); }
    };
    await scanAll(folderHandle);
    const dbg = allFound.length
      ? `폴더 내 전체 파일 (${allFound.length}개):\n` + allFound.slice(0,20).join('\n') + (allFound.length>20?'\n...':'')
      : '파일을 전혀 찾지 못했습니다 (빈 폴더 또는 권한 없음)';
    alert(`선택된 폴더: "${folderHandle.name}"\n\n${dbg}`);
    return;
  }

  // Auto-load latest backup if no allData
  if(backupFiles.length && (!allData||!allData.length)) {
    const latest = backupFiles.sort((a,b)=>b.name.localeCompare(a.name))[0];
    const file = await latest.handle.getFile();
    const txt = await file.text();
    try {
      const obj=JSON.parse(txt); const data=obj.data||obj;
      if(Array.isArray(data)){ allData=data; buildByMonth(); }
    } catch(e){}
  }

  // Process new sales files
  let processed=0;
  for(const {name,handle} of salesFiles) {
    const file = await handle.getFile();
    showLoading(true);
    try {
      let rows;
      if(name.toLowerCase().endsWith('.csv')){
        const txt=await file.text();
        const wb=XLSX.read(txt,{type:'string',cellDates:true,raw:false});
        rows=XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]],{header:1,defval:''});
      } else {
        const ab=await file.arrayBuffer();
        const wb=XLSX.read(ab,{type:'array',cellDates:true});
        const sName=wb.SheetNames.find(n=>n.includes('Daily'))||wb.SheetNames[0];
        rows=XLSX.utils.sheet_to_json(wb.Sheets[sName],{header:1,defval:''});
      }
      const newData=isBusinessReportCSV(rows)?parseBusinessReportRows(rows):parseRowsToData(rows);
      if(newData.length){
        allData=mergeData(allData.length?allData:PRELOADED, newData);
        saveToStorage(allData);
        processed++;
      }
    } catch(e){ console.warn(name+': '+e.message); }
    showLoading(false);
  }

  // Save backup to folder
  await saveBackupToFolder();

  if(allData&&allData.length){ buildByMonth(); showDash(); }
  alert(isKo()?`📂 완료: ${processed}개 파일 처리, ${allData.length}일 데이터`:`📂 Done: ${processed} files, ${allData.length} days`);
}

// Extract parseRows logic into reusable function
// Detect and parse Amazon Business Report CSV
// Header: 날짜, 주문 상품 판매량, 주문 수량, 총 주문 아이템, ..., 세션 - 합계
function isSponsoredProductsReport(rows) {
  const h = (rows[0]||[]).map(c=>String(c).toLowerCase());
  return h.some(c=>c.includes('지출')||c.includes('캠페인 이름')||c.includes('campaign name'));
}

function parseSponsoredProductsRows(rows) {
  const header = (rows[0]||[]).map(c=>String(c).trim().toLowerCase());
  const idx = {
    date:    header.findIndex(h=>h.includes('날짜')||h==='date'),
    spend:   header.findIndex(h=>h.includes('지출')||h.includes('spend')),
    sales7:  header.findIndex(h=>h.includes('7일 총 판매')||h.includes('7 day total sales')),
    clicks:  header.findIndex(h=>h.includes('클릭수')||h.includes('clicks')),
    impr:    header.findIndex(h=>h.includes('노출 수')||h.includes('impressions')),
    orders7: header.findIndex(h=>h.includes('7일 총 주문')||h.includes('total orders')),
  };
  const dailyMap={};
  const n=v=>parseFloat(String(v||'0').replace(/[,$%]/g,''))||0;
  for(let i=1;i<rows.length;i++){
    const r=rows[i]; if(!r||!r[idx.date]) continue;
    let dt;
    const b=r[idx.date];
    if(b instanceof Date) dt={yr:b.getFullYear(),mo:b.getMonth()+1,day:b.getDate(),dow:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][b.getDay()]};
    else {const d=new Date(String(b));if(isNaN(d.getTime()))continue;dt={yr:d.getFullYear(),mo:d.getMonth()+1,day:d.getDate(),dow:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][d.getDay()]};}
    const k=dt.yr+'_'+dt.mo+'_'+dt.day;
    if(!dailyMap[k]) dailyMap[k]={dt,adSpend:0,adSales:0,clicks:0,impr:0,adOrders:0};
    dailyMap[k].adSpend += idx.spend  >=0?n(r[idx.spend]):0;
    dailyMap[k].adSales += idx.sales7 >=0?n(r[idx.sales7]):0;
    dailyMap[k].clicks  += idx.clicks >=0?n(r[idx.clicks]):0;
    dailyMap[k].impr    += idx.impr   >=0?n(r[idx.impr]):0;
    dailyMap[k].adOrders+= idx.orders7>=0?n(r[idx.orders7]):0;
  }
  return Object.values(dailyMap).map(({dt,adSpend,adSales,clicks,impr,adOrders})=>({
    yr:dt.yr,mo:dt.mo,day:dt.day,dow:dt.dow,
    sales:0,salesKRW:0,orders:0,items:0,sessions:0,
    adSpend:Math.round(adSpend*100)/100,
    adSales:Math.round(adSales*100)/100,
    impr:Math.round(impr), clicks:Math.round(clicks), adOrders:Math.round(adOrders),
    organic:0,vine_adj:0,_adOnly:true
  }));
}

function isBusinessReportCSV(rows) {
  const h = rows[0] || [];
  return h.some(c => typeof c === 'string' && (c.includes('날짜') || c.includes('Date')));
}

function parseBusinessReportRows(rows) {
  // Find header row (row 0 is header for this CSV)
  const header = (rows[0] || []).map(c => String(c).trim());
  const idx = {
    date: header.findIndex(c => c.includes('날짜') || c.toLowerCase().includes('date')),
    sales: header.findIndex(c => c.includes('판매량') || c.includes('Product Sales')),
    orders: header.findIndex(c => c.includes('주문 수량') || c.includes('Units Ordered')),
    items: header.findIndex(c => c.includes('총 주문 아이템') || c.includes('Total Order Items')),
    sessions: header.findIndex(c => c.includes('세션') || c.includes('Sessions')),
  };

  const parseNum = v => {
    if(v===null||v===undefined||v==='') return 0;
    return parseFloat(String(v).replace(/[US$₩,\s]/g,'')) || 0;
  };

  const parseDate = str => {
    // "26. 5. 21." → year=2026, mo=5, day=21
    // "26. 05. 21." or "2026-05-21" or "5/21/2026"
    str = String(str).trim().replace(/\.\s*$/, '');
    // Try "YY. M. D." format
    const m1 = str.match(/^(\d{2})[\.\s]+(\d{1,2})[\.\s]+(\d{1,2})/);
    if(m1) return {yr: 2000+parseInt(m1[1]), mo: parseInt(m1[2]), day: parseInt(m1[3])};
    // Try standard formats
    const d = new Date(str);
    if(!isNaN(d.getTime())) return {yr:d.getFullYear(), mo:d.getMonth()+1, day:d.getDate()};
    return null;
  };

  const result = [];
  const vm = {}; VINE_ITEMS.forEach(v=>{const k=v.yr+'_'+v.mo+'_'+v.day;vm[k]=(vm[k]||0)+(v.adj||0)});

  for(let i=1; i<rows.length; i++) {
    const r = rows[i];
    if(!r || !r.length || !r[0]) continue;
    const dt = parseDate(r[idx.date>=0 ? idx.date : 0]);
    if(!dt || dt.yr < 2000) continue;
    const {yr, mo, day} = dt;
    const dateObj = new Date(yr, mo-1, day);
    const dow = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][dateObj.getDay()];
    const k = yr+'_'+mo+'_'+day;
    result.push({
      yr, mo, day, dow,
      sales:    parseNum(r[idx.sales>=0   ? idx.sales   : 1]),
      salesKRW: 0,
      orders:   parseNum(r[idx.orders>=0  ? idx.orders  : 2]),
      items:    parseNum(r[idx.items>=0   ? idx.items   : 3]),
      sessions: parseNum(r[idx.sessions>=0? idx.sessions: 8]),
      adSpend: 0, adSales: 0,
      organic: parseNum(r[idx.sales>=0 ? idx.sales : 1]), // all organic from Business Report
      vine_adj: vm[k] || 0,
    });
  }
  return result;
}

function parseRowsToData(rows) {
  const result=[];
  const vm={}; VINE_ITEMS.forEach(v=>{const k=v.yr+'_'+v.mo+'_'+v.day;vm[k]=(vm[k]||0)+(v.adj||0)});
  for(let i=2;i<rows.length;i++){
    const r=rows[i];if(!r||!r.length)continue;
    let b=r[1],yr,mo,day,dow;
    if(b instanceof Date){yr=b.getFullYear();mo=b.getMonth()+1;day=b.getDate();dow=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][b.getDay()];}
    else if(typeof b==='string'&&b.trim()){const d=new Date(b.trim());if(isNaN(d.getTime()))continue;yr=d.getFullYear();mo=d.getMonth()+1;day=d.getDate();dow=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][d.getDay()];}
    else continue;
    if(!yr||yr<2000)continue;
    result.push({yr,mo,day,dow,sales:toN(r[3]),salesKRW:toN(r[4]),orders:toN(r[5]),items:toN(r[6]),sessions:toN(r[7]),adSpend:toN(r[12]),adSales:toN(r[13]),organic:toN(r[14]),vine_adj:vm[yr+'_'+mo+'_'+day]||0});
  }
  return result;
}

async function saveBackupToFolder() {
  if(!folderHandle||!allData||!allData.length) return;
  try {
    const ts=new Date().toISOString().slice(0,10);
    const fname=`jb_dashboard_backup_${ts}.json`;
    const fh=await folderHandle.getFileHandle(fname,{create:true});
    const ws=await fh.createWritable();
    await ws.write(JSON.stringify({version:'jb_v1',exportDate:new Date().toISOString(),data:allData},null,2));
    await ws.close();
    console.log('Backup saved to folder:', fname);
  } catch(e){ console.warn('Folder backup failed:', e.message); }
}

// ──── GOOGLE DRIVE SYNC ──────────────────────────────────────────────
const DRIVE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz_NAcN5bkdWFdzaOQlXS5JQKLuHmxKVXWzhJunJqw41mfPSOb1JcVQ8JZ0vh5T2v-HWg/exec';
const DRIVE_SYNC_KEY      = 'jb_drive_last_sync';
const DRIVE_FILE_MOD_KEY  = 'jb_drive_last_file_mod';

async function syncFromDriveAndShow() {
  // 메인 화면에서 동기화 후 대시보드 진입
  showLoading(true);
  try {
    const base = loadFromStorage().length ? mergeData(PRELOADED, loadFromStorage()) : PRELOADED;
    allData = base;
    const res = await fetch(DRIVE_SCRIPT_URL, {redirect:'follow'});
    const json = await res.json();
    if(json.success && json.data?.length) {
      allData = mergeData(base, json.data);
      saveToStorage(allData);
    }
    buildByMonth(); showDash();
  } catch(e) {
    // Drive 실패 시 저장된 데이터로 진입
    const stored = loadFromStorage();
    allData = stored.length ? stored : PRELOADED;
    buildByMonth(); showDash();
    alert(isKo()?'Drive 연결 실패 — 저장된 데이터로 표시합니다':'Drive failed — showing saved data');
  } finally {
    showLoading(false);
  }
}

async function syncFromDrive(silent=false) {
  const btn = document.getElementById('drive-sync-btn');
  if(btn) { btn.textContent='⏳'; btn.disabled=true; }

  try {
    const res = await fetch(DRIVE_SCRIPT_URL, {redirect:'follow'});
    if(!res.ok) throw new Error('HTTP ' + res.status);
    const json = await res.json();

    if(!json.success) throw new Error(json.error || 'Unknown error');

    const incoming = json.data || [];
    if(!incoming.length) {
      if(!silent) {
        const syncBtn = document.getElementById('drive-sync-btn');
        if(syncBtn) {
          const orig = syncBtn.textContent;
          syncBtn.textContent = isKo()?'동기화할 내용이 없습니다':'Nothing to sync';
          syncBtn.style.color = 'var(--muted)';
          setTimeout(()=>{ syncBtn.textContent=orig; syncBtn.style.color=''; }, 3000);
        }
      }
      return;
    }

    // Merge with existing
    // Always ensure PRELOADED embedded data is included as the base
    const stored = loadFromStorage();
    const base = stored.length ? mergeData(PRELOADED, stored) : PRELOADED;
    allData = mergeData(base, incoming);
    saveToStorage(allData);
    localStorage.setItem(DRIVE_SYNC_KEY, new Date().toISOString());
    if(json.lastFileMod) localStorage.setItem(DRIVE_FILE_MOD_KEY, json.lastFileMod);

    buildByMonth(); render();

    if(!silent) {
      const ts = new Date().toLocaleTimeString();
      alert(isKo()
        ? `✅ 동기화 완료!\n파일 ${json.fileCount}개 → 데이터 ${allData.length}일\n${ts}`
        : `✅ Sync done!\n${json.fileCount} files → ${allData.length} days\n${ts}`);
    }
    updateDriveSyncStatus();

  } catch(e) {
    console.error('Drive sync error:', e);
    if(!silent) alert(isKo()?'Drive 동기화 오류: '+e.message:'Drive sync error: '+e.message);
  } finally {
    if(btn) { btn.textContent=isKo()?'동기화':'Sync'; btn.disabled=false; }
  }
}

function updateDriveSyncStatus() {
  const last = localStorage.getItem(DRIVE_SYNC_KEY);
  const ss = document.getElementById('storage-status');
  const syncBtn = document.getElementById('drive-sync-btn');
  if(last) {
    const d = new Date(last);
    const stored = loadFromStorage();
    const caDate = d.toLocaleDateString('ko-KR', {timeZone:'America/Los_Angeles', month:'long', day:'numeric', hour:'2-digit', minute:'2-digit'});
    const tooltip = (isKo()?'마지막 동기화: ':'Last sync: ') + caDate
      + (isKo()?' ('+stored.length+'일 저장됨)':' ('+stored.length+' days)');
    if(syncBtn) syncBtn.setAttribute('data-tooltip', tooltip);
    if(ss) ss.textContent = tooltip;
  }
}

// Auto-sync on dashboard open (silent)
function isSameCaDay(ts1, ts2) {
  const fmt = t => new Date(t).toLocaleDateString('en-CA', {timeZone:'America/Los_Angeles'});
  return fmt(ts1) === fmt(ts2);
}

async function autoSyncOnLoad() {
  const lastSync    = localStorage.getItem(DRIVE_SYNC_KEY);
  const lastFileMod = localStorage.getItem(DRIVE_FILE_MOD_KEY);
  const now = Date.now();
  // 오늘 캘리포니아 기준으로 이미 동기화했으면 스킵
  if(lastSync && isSameCaDay(new Date(lastSync), now)) {
    // 오늘 이미 동기화 완료 - 버튼에 표시
    const sb = document.getElementById('drive-sync-btn');
    if(sb) sb.setAttribute('data-tooltip', (sb.getAttribute('data-tooltip')||'') + (isKo()?' · 오늘 동기화 완료':' · Already synced today'));
    return;
  }
  await syncFromDrive(true);
}

function resetDashboard(){
  // Update storage status
  updateDriveSyncStatus();
  const stored = loadFromStorage();
  const ss = document.getElementById('storage-status');
  if(ss && !stored.length) ss.textContent='';
  document.getElementById('upload-screen').style.display='flex';document.getElementById('dashboard').style.display='none';document.getElementById('file-input').value='';}
function showLoading(v){document.getElementById('loading').classList.toggle('show',v)}
// ──── ADS TAB ────────────────────────────────────────────────────
// ──── ADS 탭 상태 & 지표 정의 ────────────────────────────────────
let adsGran='weekly', adsQuick=30, adsFrom='', adsTo='';
let adsMetrics=['roas','acos'];   // 다중선택(최대4)
const ADS_MAX_METRICS=4;
const ADS_TABS=['overview','campaign','adgroup','keyword','allkw','newkw'];
const MNE=['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const ADS_METRICS={
  adSpend:{ko:'광고비',en:'Ad Spend',c:t=>t.adSpend, f:'money'},
  adSales:{ko:'광고매출',en:'Ad Sales',c:t=>t.adSales, f:'money'},
  organic:{ko:'오가닉',en:'Organic',c:t=>t.organic, f:'money'},
  totalSales:{ko:'총매출',en:'Total Sales',c:t=>t.sales, f:'money'},
  roas:{ko:'ROAS',en:'ROAS',c:t=>t.adSpend>0?t.adSales/t.adSpend*100:0, f:'pct'},
  acos:{ko:'ACoS',en:'ACoS',c:t=>t.adSales>0?t.adSpend/t.adSales*100:0, f:'num'},
  troas:{ko:'Total ROAS',en:'Total ROAS',c:t=>t.adSpend>0?t.sales/t.adSpend*100:0, f:'pct'},
  tacos:{ko:'TACoS',en:'TACoS',c:t=>t.sales>0?t.adSpend/t.sales*100:0, f:'num'},
  impr:{ko:'노출',en:'Impressions',c:t=>t.impr||0, f:'int'},
  cpm:{ko:'CPM',en:'CPM',c:t=>t.impr>0?t.adSpend/t.impr*1000:0, f:'money'},
  clicks:{ko:'클릭',en:'Clicks',c:t=>t.clicks||0, f:'int'},
  ctr:{ko:'CTR',en:'CTR',c:t=>t.impr>0?t.clicks/t.impr*100:null, f:'pct'},
  cpc:{ko:'CPC',en:'CPC',c:t=>t.clicks>0?t.adSpend/t.clicks:0, f:'money'},
  adOrders:{ko:'AD주문',en:'AD Orders',c:t=>t.adOrders||0, f:'int'},
  cvr:{ko:'전환율(CVR)',en:'CVR',c:t=>t.clicks>0?t.adOrders/t.clicks*100:0, f:'pct'},
  cpa:{ko:'전환당비용(CPA)',en:'CPA',c:t=>t.adOrders>0?t.adSpend/t.adOrders:0, f:'money'},
};
const ADS_ORDER=['adSpend','adSales','organic','roas','acos','troas','tacos','impr','cpm','clicks','ctr','cpc','adOrders','cvr','cpa'];
function mLabel(k){return isKo()?ADS_METRICS[k].ko:ADS_METRICS[k].en;}
function fmtMetric(k,v,rate){const m=ADS_METRICS[k];
  if(m.f==='money')return fmtAgg(v,rate.krw,rate.sgd);
  if(m.f==='pct')return Math.round(v)+'%';
  if(m.f==='num')return Math.round(v).toString();
  return Math.round(v).toLocaleString('en-US');}

function setAdsGran(g){adsGran=g;render();}
function setAdsQuick(d){adsQuick=d;render();}
function toggleAdsMetric(k){const i=adsMetrics.indexOf(k);if(i>=0){if(adsMetrics.length>1)adsMetrics.splice(i,1);}else{if(adsMetrics.length<ADS_MAX_METRICS)adsMetrics.push(k);else{alert(isKo()?('최대 '+ADS_MAX_METRICS+'개까지 선택 가능합니다'):('Max '+ADS_MAX_METRICS+' metrics'));return;}}render();}
function setAdsRange(){const f=document.getElementById('ads-from').value,t=document.getElementById('ads-to').value;if(f&&t){adsFrom=f;adsTo=t;}render();}
function clearAdsRange(){adsFrom='';adsTo='';render();}

// 광고 데이터 최신일 기준 최근 N일 버킷 생성
function buildAdsBuckets(){
  const adRows=allData.filter(d=>(d.adSpend>0||d.impr>0));
  const base=adRows.length?adRows:allData.filter(d=>d.sales>0);
  if(!base.length)return{rows:[],buckets:[],from:null,to:null};
  base.sort((a,b)=>new Date(a.yr,a.mo-1,a.day)-new Date(b.yr,b.mo-1,b.day));
  const last=base[base.length-1];
  let to,from;
  if(adsFrom&&adsTo){ from=new Date(adsFrom+'T00:00:00'); to=new Date(adsTo+'T00:00:00'); }
  else { to=new Date(last.yr,last.mo-1,last.day); from=new Date(to); from.setDate(from.getDate()-(adsQuick-1)); }
  const rows=allData.filter(d=>{const dd=new Date(d.yr,d.mo-1,d.day);return dd>=from&&dd<=to;})
    .sort((a,b)=>new Date(a.yr,a.mo-1,a.day)-new Date(b.yr,b.mo-1,b.day));

  const isoFmt=d=>d?d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'):'';
  let buckets=[];
  if(adsGran==='yearly'){
    // 연도별 버킷
    const yMap={};
    allData.forEach(r=>{if(!r.adSpend&&!r.sales)return;if(!yMap[r.yr])yMap[r.yr]={yr:r.yr,rows:[]};yMap[r.yr].rows.push(r);});
    buckets=Object.values(yMap).sort((a,b)=>a.yr-b.yr).map(y=>({
      label:isKo()?(y.yr+'년'):String(y.yr), t:agg(y.rows),rows:y.rows
    }));
  } else if(adsGran==='monthly'){
    // 월별 추이 버킷
    const mMap={};
    allData.forEach(r=>{if(!r.adSpend&&!r.sales)return;const k=r.yr+'_'+r.mo;if(!mMap[k])mMap[k]={yr:r.yr,mo:r.mo,rows:[]};mMap[k].rows.push(r);});
    buckets=Object.values(mMap).sort((a,b)=>a.yr!==b.yr?a.yr-b.yr:a.mo-b.mo).map(m=>({
      label:isKo()?MN[m.mo]:(MNE[m.mo]||'?'), t:agg(m.rows),rows:m.rows
    }));
  } else if(adsGran==='daily'){
    buckets=rows.map(r=>({label:r.mo+'/'+r.day, dow:r.dow, t:agg([r]),rows:[r]}));
  } else { // weekly: 일~토
    const wkMap={};
    rows.forEach(r=>{
      const dd=new Date(r.yr,r.mo-1,r.day);
      const sun=new Date(dd); sun.setDate(dd.getDate()-dd.getDay());
      const wk=getGlobalWeek(sun);
      const key='W'+wk;
      if(!wkMap[key])wkMap[key]={label:(isKo()?'W'+wk:'W'+String(wk).padStart(2,'0')),rows:[],sun};
      wkMap[key].rows.push(r);
    });
    buckets=Object.values(wkMap).sort((a,b)=>a.sun-b.sun).map(w=>{
      const f=w.rows[0],l=w.rows[w.rows.length-1];
      return {label:w.label+' ('+f.mo+'/'+f.day+'~'+l.mo+'/'+l.day+')', t:agg(w.rows)};
    });
  }
  return {rows,buckets,from,to};
}

function renderAds(){
  const _rs=document.getElementById('review-section');if(_rs)_rs.innerHTML='';_hideWeekNav();
  document.getElementById('topbar-badge').textContent=isKo()?'광고 분석':'Ads';
  document.getElementById('daily-section').style.display='none';

  // Ads 레이아웃: KPI 3행 / 도넛 제거 / 차트 full
  const kr=document.getElementById('kpi-row1'); kr.className=''; kr.style.display='block';
  const rg=document.getElementById('ratio-grid'); rg.className=''; rg.style.display='block'; rg.style.marginBottom='14px';
  const cg=document.getElementById('charts-grid'); cg.style.gridTemplateColumns='1fr';
  const dc=document.getElementById('donut-card'); if(dc)dc.style.display='none';
  const _mwA=document.getElementById('mainChart-wrap'); if(_mwA)_mwA.style.height='360px';

  const {rows,buckets,from,to}=buildAdsBuckets();
  const T0=rows.length?agg(rows):emptyT();
  const rate=avgRate(T0);
  const fmtD=d=>d?(d.getMonth()+1)+'/'+d.getDate():'-';
  const sym=activeCurrency==='KRW'?'₩':activeCurrency==='SGD'?'S$':'$';
  const cr=getRate(to?to.getFullYear():2026, to?to.getMonth()+1:5);
  const isoD=d=>d?d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'):'';

  // ── 기간 컨트롤 + 날짜 직접선택 (항목4) ──
  const granBtn=(g,lb)=>'<button onclick="setAdsGran(\''+g+'\')" style="padding:6px 14px;border:1px solid var(--border);border-radius:7px;cursor:pointer;font-size:12px;font-weight:600;background:'+(adsGran===g?'var(--accent)':'var(--card)')+';color:'+(adsGran===g?'#fff':'var(--muted)')+'">'+lb+'</button>';
  const qActive=!adsFrom&&!adsTo;
  const quickBtn=(d)=>'<button onclick="clearAdsRange();setAdsQuick('+d+')" style="padding:6px 12px;border:1px solid var(--border);border-radius:7px;cursor:pointer;font-size:12px;font-weight:600;background:'+(qActive&&adsQuick===d?'#0891b2':'var(--card)')+';color:'+(qActive&&adsQuick===d?'#fff':'var(--muted)')+'">'+(isKo()?d+'일':d+'d')+'</button>';
  document.getElementById('top-banner').innerHTML=
    '<div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;background:var(--card);border:1px solid var(--border);border-radius:10px;padding:12px 16px;margin-bottom:4px">'+
      '<div style="display:flex;gap:4px">'+granBtn('yearly',isKo()?'연간':'Yearly')+granBtn('monthly',isKo()?'월간':'Monthly')+granBtn('weekly',isKo()?'주별':'Weekly')+granBtn('daily',isKo()?'일별':'Daily')+'</div>'+
      '<div style="width:1px;height:22px;background:var(--border)"></div>'+
      '<div style="display:flex;gap:4px">'+quickBtn(7)+quickBtn(14)+quickBtn(30)+'</div>'+
      '<div style="width:1px;height:22px;background:var(--border)"></div>'+
      '<div style="display:flex;gap:6px;align-items:center">'+
        '<div id="ads-from-mount"></div>'+
        '<span style="color:var(--muted);font-size:11px">~</span>'+
        '<div id="ads-to-mount"></div>'+
        '<button class="mini-btn" onclick="setAdsRange()">'+(isKo()?'적용':'Apply')+'</button>'+
        (adsFrom?'<button class="mini-btn ghost" onclick="clearAdsRange()">'+(isKo()?'해제':'Clear')+'</button>':'')+
      '</div>'+
      '<div style="margin-left:auto;font-size:12px;color:var(--muted)">'+(isKo()?'기간':'Period')+': <strong style="color:var(--text)">'+fmtD(from)+' ~ '+fmtD(to)+'</strong> ('+rows.length+(isKo()?'일':'d')+')</div>'+
    '</div>';
  const _af=adsFrom||isoD(from), _at=adsTo||isoD(to);
  document.getElementById('ads-from-mount').innerHTML=dpHtml('ads-from',_af); dpInit('ads-from',_af);
  document.getElementById('ads-to-mount').innerHTML=dpHtml('ads-to',_at); dpInit('ads-to',_at);

  // ── KPI 3행 (항목5) ──
  const kpiColor={adSpend:'#ef4444',adSales:'#22c55e',organic:'#06b6d4',totalSales:'#3b82f6',roas:'#3b82f6',acos:'#f97316',troas:'#8b5cf6',tacos:'#ec4899',impr:'#64748b',cpm:'#0891b2',clicks:'#0ea5e9',ctr:'#14b8a6',cpc:'#f59e0b',adOrders:'#a855f7',cvr:'#10b981',cpa:'#ef4444'};
  const ADS_ROWS=[
    ['adSpend','adSales','organic','totalSales'],
    ['roas','acos','troas','tacos'],
    ['impr','cpm','clicks','ctr','cpc','adOrders','cvr','cpa'],
  ];
  const card=k=>'<div class="kpi-card" style="--kc:'+kpiColor[k]+'"><div class="kpi-lbl">'+mLabel(k)+'</div><div class="kpi-val">'+fmtMetric(k,ADS_METRICS[k].c(T0),rate)+'</div></div>';
  kr.innerHTML=ADS_ROWS.map((row,i)=>{
    const cols=i<2?4:8;
    const sep=i>0?'border-top:1px solid var(--border);padding-top:8px;margin-top:4px;':'';
    return '<div style="display:grid;grid-template-columns:repeat('+cols+',1fr);gap:8px;margin-bottom:8px;'+sep+'">'+row.map(card).join('')+'</div>';
  }).join('');

  // ── Trend Metrics 다중선택 칩 (항목6, 최대4) ──
  const chip=k=>{const on=adsMetrics.includes(k);return '<button onclick="toggleAdsMetric(\''+k+'\')" style="padding:4px 10px;border:1px solid '+(on?'var(--accent)':'var(--border)')+';border-radius:14px;cursor:pointer;font-size:11px;font-weight:600;background:'+(on?'var(--accent)':'var(--card)')+';color:'+(on?'#fff':'var(--muted)')+'">'+mLabel(k)+'</button>';};
  rg.innerHTML='<div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;background:var(--card);border:1px solid var(--border);border-radius:10px;padding:10px 16px">'+
    '<span style="font-size:12px;color:var(--muted);font-weight:700">'+(isKo()?'📊 추이 지표 (최대'+ADS_MAX_METRICS+')':'📊 Trend Metrics (max '+ADS_MAX_METRICS+')')+'</span>'+
    ADS_ORDER.map(chip).join('')+'</div>';

  // ── 차트 (Bar/Line/Mix 반영) ──
  if(mainCI){mainCI.destroy();mainCI=null;}
  const palette=['#3b82f6','#f97316','#22c55e','#a855f7'];
  const axLabel=(k,v)=>{const f=ADS_METRICS[k].f; if(f==='money')return sym+Math.round(v).toLocaleString(); if(f==='pct'||f==='num')return Math.round(v)+(f==='pct'?'%':''); return Math.round(v).toLocaleString();};
  const isRight=k=>{const f=ADS_METRICS[k].f;return f==='pct'||f==='num';};
  const _isLine=chartType==='line', _isMix=chartType==='mix';
  const datasets=adsMetrics.map((k,i)=>{
    const m=ADS_METRICS[k];
    const data=buckets.map(b=>{const v=m.c(b.t);return m.f==='money'?v*cr:v;});
    const dsType=_isLine?'line':(_isMix&&isRight(k)?'line':'bar');
    return {label:mLabel(k),data,type:dsType,borderColor:palette[i%4],backgroundColor:_isLine?palette[i%4]+'22':palette[i%4]+'99',yAxisID:(_isMix&&isRight(k))?'y2':'y',tension:.4,borderWidth:2,pointRadius:3,fill:_isLine,borderRadius:4};
  });
  document.getElementById('chart-main-title').textContent=(isKo()?'📈 광고 추이: ':'📈 Ad Trend: ')+adsMetrics.map(mLabel).join(' · ');
  const hasY2_ov=_isMix&&adsMetrics.some(k=>isRight(k));
  mainCI=new Chart(document.getElementById('mainChart').getContext('2d'),{
    type:_isLine?'line':'bar',
    data:{labels:buckets.map(b=>b.label),datasets},
    options:{responsive:true,maintainAspectRatio:false,animation:false,spanGaps:true,interaction:{mode:'index',intersect:false},
      plugins:{legend:{labels:{color:'#475569',boxWidth:10,font:{size:12}}},
        tooltip:{backgroundColor:'#fff',borderColor:'#e2e8f0',borderWidth:1,titleColor:'#0f172a',bodyColor:'#334155',padding:10,
          callbacks:{label:c=>' '+c.dataset.label+': '+axLabel(adsMetrics[c.datasetIndex],c.raw)}}},
      scales:{x:{ticks:{color:'#64748b',font:{size:10},maxRotation:45},grid:{color:'#f1f5f9'}},
        y:{position:'left',ticks:{color:'#64748b'},grid:{color:'#e2e8f0'},title:{display:true,text:(isKo()?'금액/수량':'Amount/Count'),color:'#94a3b8',font:{size:10}}},
        ...(hasY2_ov?{y2:{position:'right',ticks:{color:'#64748b',callback:v=>v+'%'},grid:{drawOnChartArea:false},title:{display:true,text:(isKo()?'비율(%)':'Ratio(%)'),color:'#94a3b8',font:{size:10}}}}:{})}
    }
  });

  // ── 기간별 테이블 (데이터 없는 일별 행 제외) ──
  const showDow=adsGran==='daily';
  const cols=['adSpend','adSales','organic','impr','clicks','ctr','cpc','cpm','adOrders','cvr','cpa','roas','acos','troas','tacos'];
  const hasAdData=b=>b.t&&(b.t.adSpend>0||b.t.impr>0||b.t.clicks>0||b.t.adSales>0);
  const visibleBuckets=showDow?buckets.filter(hasAdData):buckets;
  const granLabel=isKo()?(adsGran==='yearly'?'📅 연간 광고 요약':adsGran==='monthly'?'📅 월간 광고 요약':adsGran==='daily'?'📅 일별 광고 상세':'📅 주별 광고 상세'):(adsGran==='yearly'?'📅 Yearly Ad Summary':adsGran==='monthly'?'📅 Monthly Ad Summary':adsGran==='daily'?'📅 Daily Ad Detail':'📅 Weekly Ad Detail');
  document.getElementById('summary-section').innerHTML=
    '<div class="section-title">'+granLabel+' ('+visibleBuckets.length+(showDow&&visibleBuckets.length<buckets.length?' <span style="font-size:10px;color:var(--muted)">/ '+buckets.length+' — '+( isKo()?'데이터 없는 날 제외':'zero-data days hidden')+'</span>':'')+')</div>'+
    '<div class="'+(showDow?'daily-sticky':'table-wrap scrollx')+'"><table><thead><tr><th style="text-align:left">'+(isKo()?'기간':'Period')+'</th>'+(showDow?'<th style="width:40px;text-align:center">'+(isKo()?'요일':'Day')+'</th>':'')+cols.map(k=>'<th>'+mLabel(k)+'</th>').join('')+'</tr></thead><tbody>'+
      visibleBuckets.map(b=>{const roas=ADS_METRICS.roas.c(b.t);const rc=roas>=100?'pos':roas>0?'neg':'dim';
        const _dw=b.rows&&b.rows[0]?b.rows[0].dow:'';const _dc=_dw==='Sun'?'var(--red)':_dw==='Sat'?'#2563eb':'var(--muted)';const dowCell=showDow?'<td style="text-align:center;color:'+_dc+'">'+(_dw||'—')+'</td>':'';
        return '<tr><td style="text-align:left">'+b.label+'</td>'+dowCell+cols.map(k=>'<td class="'+(k==='roas'?rc:'')+'">'+fmtMetric(k,ADS_METRICS[k].c(b.t),rate)+'</td>').join('')+'</tr>';}).join('')+
    '</tbody></table></div>';
}

// ──── SHARED: cross-section stat layout + metric chips ───────────
let adsStatMetrics=['roas','acos'];
function toggleAdsStatMetric(k){
  const i=adsStatMetrics.indexOf(k);
  if(i>=0){if(adsStatMetrics.length>1)adsStatMetrics.splice(i,1);}
  else{if(adsStatMetrics.length<4)adsStatMetrics.push(k);else{alert(isKo()?'최대 4개까지 선택 가능합니다':'Max 4 metrics');return;}}
  render();
}
const STAT_METRICS={
  spend:{ko:'광고비',en:'Spend',f:'money',v:d=>d.spend},
  sales:{ko:'매출',en:'Sales',f:'money',v:d=>d.sales},
  roas:{ko:'ROAS',en:'ROAS',f:'pct',v:d=>d.spend>0?d.sales/d.spend*100:0},
  acos:{ko:'ACoS',en:'ACoS',f:'num',v:d=>d.sales>0?d.spend/d.sales*100:0},
  cpc:{ko:'CPC',en:'CPC',f:'money',v:d=>d.clicks>0?d.spend/d.clicks:0},
  ctr:{ko:'CTR',en:'CTR',f:'pct',v:d=>(d.impr&&d.impr>0)?d.clicks/d.impr*100:0},
  orders:{ko:'주문',en:'Orders',f:'int',v:d=>d.orders||0},
  clicks:{ko:'클릭',en:'Clicks',f:'int',v:d=>d.clicks||0},
  impr:{ko:'노출',en:'Impr',f:'int',v:d=>d.impr||0},
};
const STAT_ORDER=['spend','sales','roas','acos','cpc','ctr','orders','clicks','impr'];
function statLabel(k){return isKo()?STAT_METRICS[k].ko:STAT_METRICS[k].en;}

function _adsStatLayout(){
  const _rs=document.getElementById('review-section');if(_rs)_rs.innerHTML='';_hideWeekNav();
  document.getElementById('daily-section').style.display='none';
  const kr=document.getElementById('kpi-row1'); kr.className=''; kr.style.display='block';
  const rg=document.getElementById('ratio-grid'); rg.className=''; rg.style.display='block'; rg.style.marginBottom='14px';
  const cg=document.getElementById('charts-grid'); cg.style.gridTemplateColumns='1fr';
  const dc=document.getElementById('donut-card'); if(dc)dc.style.display='none';
  const mw=document.getElementById('mainChart-wrap'); if(mw){mw.style.display='block';mw.style.height='360px';}
}

function _renderStatKPI(rows){
  const kr=document.getElementById('kpi-row1');
  kr.innerHTML=rows.map((row,i)=>{
    const sep=i>0?'border-top:1px solid var(--border);padding-top:8px;margin-top:4px;':'';
    return '<div style="display:grid;grid-template-columns:repeat('+row.length+',1fr);gap:8px;margin-bottom:8px;'+sep+'">'+
      row.map(k=>'<div class="kpi-card" style="--kc:'+k.c+'"><div class="kpi-lbl">'+k.lb+'</div><div class="kpi-val">'+k.v+'</div></div>').join('')+'</div>';
  }).join('');
}

function _renderStatChips(label){
  const rg=document.getElementById('ratio-grid');
  const chip=k=>{const on=adsStatMetrics.includes(k);
    return '<button onclick="toggleAdsStatMetric(\''+k+'\')" style="padding:4px 10px;border:1px solid '+(on?'var(--accent)':'var(--border)')+';border-radius:14px;cursor:pointer;font-size:11px;font-weight:600;background:'+(on?'var(--accent)':'var(--card)')+';color:'+(on?'#fff':'var(--muted)')+'">'+statLabel(k)+'</button>';};
  rg.innerHTML='<div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;background:var(--card);border:1px solid var(--border);border-radius:10px;padding:10px 16px">'+
    '<span style="font-size:12px;color:var(--muted);font-weight:700">'+(isKo()?'📊 오버레이 지표 (최대4)':'📊 Overlay Metrics (max 4)')+'</span>'+
    (label||'')+STAT_ORDER.map(chip).join('')+'</div>';
}

function _renderStatChart(labels, items, titleStr, maxRot){
  const cr=getRate(2026,5);
  const sym=activeCurrency==='KRW'?'₩':activeCurrency==='SGD'?'S$':'$';
  const palette=['#3b82f6','#f97316','#a855f7','#14b8a6'];
  const isRight=k=>{const f=STAT_METRICS[k]?.f; return f==='pct'||f==='num'||f==='int';};
  const isMix=chartType==='mix', isLine=chartType==='line';
  let activeMetrics=adsStatMetrics.slice();
  // mix 모드에서 오버레이 없으면 ROAS 자동 추가
  if(isMix&&activeMetrics.length===0) activeMetrics=['roas'];
  const overlays=activeMetrics.map((k,i)=>{
    const m=STAT_METRICS[k]; if(!m)return null;
    const data=items.map(d=>{const v=m.v(d);return m.f==='money'?v*cr:v;});
    const ds={label:statLabel(k),data,borderColor:palette[i%4],backgroundColor:palette[i%4]+'22',
      yAxisID:(isMix&&isRight(k))?'y2':'y',tension:.3,borderWidth:2,pointRadius:4,fill:false,order:1};
    if(isMix) ds.type='line';
    return ds;
  }).filter(Boolean);
  const spendDs={label:isKo()?'광고비':'Spend',data:items.map(d=>Math.round(d.spend*cr)),
    backgroundColor:isLine?'rgba(239,68,68,.12)':'rgba(239,68,68,.55)',borderColor:'#ef4444',
    borderRadius:4,yAxisID:'y',order:2,tension:.3,fill:isLine,borderWidth:isLine?2:0};
  const salesDs={label:isKo()?'매출':'Sales',data:items.map(d=>Math.round(d.sales*cr)),
    backgroundColor:isLine?'rgba(34,197,94,.12)':'rgba(34,197,94,.55)',borderColor:'#22c55e',
    borderRadius:4,yAxisID:'y',order:2,tension:.3,fill:isLine,borderWidth:isLine?2:0};
  const datasets=[spendDs,salesDs,...overlays];
  if(mainCI)mainCI.destroy();
  const chipLabel=activeMetrics.length&&isMix&&adsStatMetrics.length===0?
    ' <span style="font-size:10px;color:#94a3b8">(ROAS auto)</span>':'';
  document.getElementById('chart-main-title').textContent=titleStr+' · '+activeMetrics.map(statLabel).join(' / ');
  const hasY2=isMix&&overlays.some(o=>o.yAxisID==='y2');
  mainCI=new Chart(document.getElementById('mainChart').getContext('2d'),{type:isLine?'line':'bar',
    data:{labels,datasets},
    options:{responsive:true,maintainAspectRatio:false,animation:false,interaction:{mode:'index',intersect:false},
      plugins:{legend:{labels:{color:'#475569',boxWidth:10,font:{size:11}}},
        tooltip:{backgroundColor:'#fff',borderColor:'#e2e8f0',borderWidth:1,titleColor:'#0f172a',bodyColor:'#334155',padding:10,
          callbacks:{label:c=>{const raw=c.raw;
            if(c.datasetIndex<2)return ' '+c.dataset.label+': '+sym+Math.round(raw).toLocaleString();
            const k=adsStatMetrics[c.datasetIndex-2];const m=STAT_METRICS[k];
            return ' '+c.dataset.label+': '+(m?.f==='money'?sym+Math.round(raw).toLocaleString():Math.round(raw)+(m?.f==='pct'?'%':''));
          }}}},
      scales:{
        x:{ticks:{color:'#64748b',maxRotation:maxRot||30,font:{size:9}},grid:{color:'#f1f5f9'}},
        y:{position:'left',ticks:{color:'#64748b',callback:v=>sym+Math.round(v)},grid:{color:'#e2e8f0'},title:{display:true,text:isKo()?'금액':'Amount',color:'#94a3b8',font:{size:10}}},
        ...(hasY2?{y2:{position:'right',ticks:{color:'#64748b',callback:v=>Math.round(v)+(adsStatMetrics.some(k=>STAT_METRICS[k]?.f==='pct')?'%':'')},grid:{drawOnChartArea:false},title:{display:true,text:isKo()?'비율/수량':'Ratio/Count',color:'#94a3b8',font:{size:10}}}}:{})
      }
    }
  });
}

// ──── 캠페인/키워드 클릭 → 메인 차트 업데이트 ────
let _activeTrendName=null;

function _buildDailyItems(item, totSpend, totSales){
  const spendR=totSpend>0?item.spend/totSpend:0;
  const salesR=totSales>0?item.sales/totSales:0;
  const daily=allData.filter(d=>d.yr===2026&&d.mo===5).sort((a,b)=>a.day-b.day);
  const labels=daily.map(d=>d.mo+'/'+d.day);
  const items=daily.map(d=>({
    spend:(d.adSpend||0)*spendR,
    sales:(d.adSales||0)*salesR,
    clicks:Math.round((d.clicks||0)*spendR),
    orders:Math.round((d.adOrders||0)*salesR)
  }));
  return {labels,items};
}

window.showCampTrend=function(name){
  const K=KEYWORD_DATA;
  const camp=K.campaigns.find(c=>c.name===name);
  if(!camp)return;
  const sorted=[...K.campaigns].sort((a,b)=>b.spend-a.spend).slice(0,12);
  // 같은 캠페인 재클릭 → 전체 캠페인 차트로 복귀
  if(_activeTrendName===name){
    _activeTrendName=null;
    document.querySelectorAll('.camp-row').forEach(r=>r.classList.remove('row-active'));
    _renderStatChart(sorted.map(c=>c.name.length>18?c.name.slice(0,18)+'…':c.name),sorted,
      isKo()?'📊 캠페인별 성과 (클릭하면 트렌드)':'📊 Campaign Performance (click for trend)',35);
    return;
  }
  _activeTrendName=name;
  document.querySelectorAll('.camp-row').forEach(r=>r.classList.remove('row-active'));
  const el=document.querySelector('.camp-row[data-name="'+CSS.escape(name)+'"]');
  if(el)el.classList.add('row-active');
  const totSpend=K.campaigns.reduce((s,c)=>s+c.spend,0);
  const totSales=K.campaigns.reduce((s,c)=>s+c.sales,0);
  const daily=allData.filter(d=>d.yr===2026&&d.mo===5).sort((a,b)=>a.day-b.day);
  if(!daily.length)return;
  const {labels,items}=_buildDailyItems(camp,totSpend,totSales);
  _renderStatChart(labels,items,'📈 '+camp.name+' — '+(isKo()?'5월 일별 추정 트렌드':'May Daily Est. Trend'),0);
};

window.showKwTrend=function(kw){
  const K=KEYWORD_DATA;
  const item=K.keywords.find(k=>k.kw===kw);
  if(!item)return;
  const top10=[...K.keywords].sort((a,b)=>b.spend-a.spend).slice(0,10);
  // 같은 키워드 재클릭 → 기본 차트 복귀
  if(_activeTrendName===kw){
    _activeTrendName=null;
    document.querySelectorAll('.kw-row').forEach(r=>r.classList.remove('row-active'));
    return;
  }
  _activeTrendName=kw;
  document.querySelectorAll('.kw-row').forEach(r=>r.classList.remove('row-active'));
  const el=document.querySelector('.kw-row[data-kw="'+CSS.escape(kw)+'"]');
  if(el)el.classList.add('row-active');
  const totSpend=K.keywords.reduce((s,k)=>s+k.spend,0);
  const totSales=K.keywords.reduce((s,k)=>s+k.sales,0);
  const daily=allData.filter(d=>d.yr===2026&&d.mo===5).sort((a,b)=>a.day-b.day);
  if(!daily.length)return;
  const {labels,items}=_buildDailyItems(item,totSpend,totSales);
  // 키워드 탭은 차트 숨겨두었으므로 잠시 보여주기
  const mw=document.getElementById('mainChart-wrap');
  if(mw)mw.style.display='block';
  _renderStatChart(labels,items,'📈 '+kw+' — '+(isKo()?'5월 일별 추정 트렌드':'May Daily Est. Trend'),0);
};

// ──── CAMPAIGN TAB ───────────────────────────────────────────────
function renderCampaigns(){
  _adsStatLayout();
  document.getElementById('topbar-badge').textContent=isKo()?'캠페인 분석':'Campaign Analysis';
  const K=KEYWORD_DATA, rate=avgRate(agg(allData));
  const cr=getRate(2026,5);
  const sym=activeCurrency==='KRW'?'₩':activeCurrency==='SGD'?'S$':'$';
  const money=v=>fmtAgg(v,rate.krw,rate.sgd);
  const roasOf=c=>c.spend>0?c.sales/c.spend*100:0;
  const acosOf=c=>c.sales>0?c.spend/c.sales*100:0;
  const cpcOf=c=>c.clicks>0?c.spend/c.clicks:0;
  const ctrOf=c=>(c.impr&&c.impr>0)?c.clicks/c.impr*100:0;
  const cpcFmt=v=>{if(activeCurrency==='KRW')return '₩'+Math.round(v*rate.krw).toLocaleString();if(activeCurrency==='SGD')return 'S$'+(v*(rate.sgd||1.34)).toFixed(2);return '$'+v.toFixed(2);};
  const totSpend=K.campaigns.reduce((s,c)=>s+c.spend,0);
  const totSales=K.campaigns.reduce((s,c)=>s+c.sales,0);
  const totOrders=K.campaigns.reduce((s,c)=>s+c.orders,0);
  const totClicks=K.campaigns.reduce((s,c)=>s+c.clicks,0);
  const totImpr=K.campaigns.reduce((s,c)=>s+(c.impr||0),0);
  const convC=K.campaigns.filter(c=>c.orders>0).length;
  // 캠페인 탭도 Overview와 동일한 기간 선택 UI 제공
  const {from:campFrom,to:campTo}=buildAdsBuckets();
  const fmtDC=d=>d?(d.getMonth()+1)+'/'+d.getDate():'-';
  const isoD2=d=>d?d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'):'';
  const granBtnC=(g,lb)=>'<button onclick="setAdsGran(\''+g+'\')" style="padding:6px 14px;border:1px solid var(--border);border-radius:7px;cursor:pointer;font-size:12px;font-weight:600;background:'+(adsGran===g?'var(--accent)':'var(--card)')+';color:'+(adsGran===g?'#fff':'var(--muted)')+'">'+lb+'</button>';
  const qActiveC=!adsFrom&&!adsTo;
  const quickBtnC=(d)=>'<button onclick="clearAdsRange();setAdsQuick('+d+')" style="padding:6px 12px;border:1px solid var(--border);border-radius:7px;cursor:pointer;font-size:12px;font-weight:600;background:'+(qActiveC&&adsQuick===d?'#0891b2':'var(--card)')+';color:'+(qActiveC&&adsQuick===d?'#fff':'var(--muted)')+'">'+(isKo()?d+'일':d+'d')+'</button>';
  const _af2=adsFrom||isoD2(campFrom), _at2=adsTo||isoD2(campTo);
  document.getElementById('top-banner').innerHTML=
    '<div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;background:var(--card);border:1px solid var(--border);border-radius:10px;padding:12px 16px;margin-bottom:4px">'+
      '<div style="display:flex;gap:4px">'+granBtnC('yearly',isKo()?'연간':'Yearly')+granBtnC('monthly',isKo()?'월간':'Monthly')+granBtnC('weekly',isKo()?'주별':'Weekly')+granBtnC('daily',isKo()?'일별':'Daily')+'</div>'+
      '<div style="width:1px;height:22px;background:var(--border)"></div>'+
      '<div style="display:flex;gap:4px">'+quickBtnC(7)+quickBtnC(14)+quickBtnC(30)+'</div>'+
      '<div style="width:1px;height:22px;background:var(--border)"></div>'+
      '<div style="display:flex;gap:6px;align-items:center">'+
        '<div id="ads-from-mount"></div>'+
        '<span style="color:var(--muted);font-size:11px">~</span>'+
        '<div id="ads-to-mount"></div>'+
        '<button class="mini-btn" onclick="setAdsRange()">'+(isKo()?'적용':'Apply')+'</button>'+
        (adsFrom?'<button class="mini-btn ghost" onclick="clearAdsRange()">'+(isKo()?'해제':'Clear')+'</button>':'')+
      '</div>'+
      '<div style="margin-left:auto;font-size:12px;color:var(--muted)">'+(isKo()?'기간':'Period')+': <strong style="color:var(--text)">'+fmtDC(campFrom)+' ~ '+fmtDC(campTo)+'</strong> · '+(isKo()?'🎯 캠페인 누적 기준':'🎯 Cumulative totals')+'</div>'+
    '</div>';
  setTimeout(()=>{
    const fm=document.getElementById('ads-from-mount');const tm=document.getElementById('ads-to-mount');
    if(fm){fm.innerHTML=dpHtml('ads-from',_af2);dpInit('ads-from',_af2);}
    if(tm){tm.innerHTML=dpHtml('ads-to',_at2);dpInit('ads-to',_at2);}
  },0);
  _renderStatKPI([
    [{lb:isKo()?'총 광고비':'Total Spend',v:money(totSpend),c:'#ef4444'},{lb:isKo()?'총 광고매출':'Ad Sales',v:money(totSales),c:'#22c55e'},{lb:'ROAS',v:Math.round(totSpend>0?totSales/totSpend*100:0)+'%',c:'#3b82f6'},{lb:'ACoS',v:Math.round(totSales>0?totSpend/totSales*100:0),c:'#f97316'}],
    [{lb:isKo()?'총 클릭':'Clicks',v:totClicks.toLocaleString(),c:'#0ea5e9'},{lb:isKo()?'총 주문':'Orders',v:totOrders,c:'#a855f7'},{lb:'CPC',v:cpcFmt(totClicks>0?totSpend/totClicks:0),c:'#f59e0b'},{lb:'CTR',v:(totImpr>0?totClicks/totImpr*100:0).toFixed(2)+'%',c:'#14b8a6'}],
    [{lb:isKo()?'캠페인 수':'Campaigns',v:K.campaigns.length,c:'#8b5cf6'},{lb:isKo()?'전환 캠페인':'Converting',v:convC,c:'#22c55e'},{lb:isKo()?'총 노출':'Impressions',v:totImpr.toLocaleString(),c:'#64748b'},{lb:'CVR',v:(totClicks>0?totOrders/totClicks*100:0).toFixed(2)+'%',c:'#10b981'}],
  ]);
  _activeTrendName=null;
  _renderStatChips();
  const sorted=[...K.campaigns].sort((a,b)=>b.spend-a.spend).slice(0,12);
  _renderStatChart(sorted.map(c=>c.name.length>18?c.name.slice(0,18)+'…':c.name),sorted,isKo()?'📊 캠페인별 성과':'📊 Campaign Performance',35);
  const campHead='<thead><tr><th style="text-align:left">'+(isKo()?'캠페인명':'Campaign')+'</th><th>'+(isKo()?'광고비':'Spend')+'</th><th>'+(isKo()?'매출':'Sales')+'</th><th>ROAS</th><th>ACoS</th><th>CPC</th><th>CTR</th><th>'+(isKo()?'클릭':'Clk')+'</th><th>'+(isKo()?'노출':'Impr')+'</th><th>'+(isKo()?'주문':'Ord')+'</th></tr></thead>';
  const campRow=c=>'<tr class="camp-row" data-name="'+c.name+'" onclick="showCampTrend(\''+c.name.replace(/'/g,"\\'")+'\')" style="cursor:pointer"><td style="text-align:left;font-size:11px">'+c.name+'</td><td>'+money(c.spend)+'</td><td>'+money(c.sales)+'</td><td class="'+(roasOf(c)>=100?'pos':'neg')+'">'+Math.round(roasOf(c))+'%</td><td>'+(acosOf(c)>0?Math.round(acosOf(c)):'-')+'</td><td>'+cpcFmt(cpcOf(c))+'</td><td>'+ctrOf(c).toFixed(2)+'%</td><td>'+c.clicks+'</td><td>'+(c.impr||0).toLocaleString()+'</td><td>'+c.orders+'</td></tr>';
  document.getElementById('summary-section').innerHTML=
    '<div class="section-title">📋 '+(isKo()?'전체 캠페인 (광고비 순 · 행 클릭 → 트렌드)':'All Campaigns (by spend · click row for trend)')+'</div>'+
    '<div class="table-wrap scrollx"><table>'+campHead+'<tbody>'+[...K.campaigns].sort((a,b)=>b.spend-a.spend).map(campRow).join('')+'</tbody></table></div>';
}

// ──── AD GROUP TAB ────────────────────────────────────────────────
function renderAdGroups(){
  _adsStatLayout();
  document.getElementById('topbar-badge').textContent=isKo()?'광고그룹 분석':'Ad Group Analysis';
  const K=KEYWORD_DATA, rate=avgRate(agg(allData));
  const cr=getRate(2026,5);
  const sym=activeCurrency==='KRW'?'₩':activeCurrency==='SGD'?'S$':'$';
  const money=v=>fmtAgg(v,rate.krw,rate.sgd);
  const roasOf=g=>g.spend>0?g.sales/g.spend*100:0;
  const acosOf=g=>g.sales>0?g.spend/g.sales*100:0;
  const cpcOf=g=>g.clicks>0?g.spend/g.clicks:0;
  const groups=K.adGroups;
  const totSpend=groups.reduce((s,g)=>s+g.spend,0);
  const totSales=groups.reduce((s,g)=>s+g.sales,0);
  const totOrders=groups.reduce((s,g)=>s+g.orders,0);
  const totClicks=groups.reduce((s,g)=>s+g.clicks,0);
  const totImpr=groups.reduce((s,g)=>s+g.impr,0);
  document.getElementById('top-banner').innerHTML='<div style="background:var(--card);border:1px solid var(--border);border-radius:10px;padding:12px 16px;margin-bottom:4px;font-size:12px;color:var(--muted)">'+(isKo()?'📦 캠페인을 제품군 × 타겟팅 방식으로 묶은 광고그룹 기준':'📦 Ad groups = product × targeting type aggregation')+'</div>';
  const COLORS=['#3b82f6','#22c55e','#f59e0b','#ef4444','#a855f7','#06b6d4','#f97316'];
  _renderStatKPI([
    [{lb:isKo()?'총 광고비':'Total Spend',v:money(totSpend),c:'#ef4444'},{lb:isKo()?'총 광고매출':'Ad Sales',v:money(totSales),c:'#22c55e'},{lb:'ROAS',v:Math.round(totSpend>0?totSales/totSpend*100:0)+'%',c:'#3b82f6'},{lb:'ACoS',v:Math.round(totSales>0?totSpend/totSales*100:0),c:'#f97316'}],
    [{lb:isKo()?'총 클릭':'Clicks',v:totClicks.toLocaleString(),c:'#0ea5e9'},{lb:isKo()?'총 주문':'Orders',v:totOrders,c:'#a855f7'},{lb:'CPC',v:money(totClicks>0?totSpend/totClicks:0),c:'#f59e0b'},{lb:'CTR',v:(totImpr>0?totClicks/totImpr*100:0).toFixed(2)+'%',c:'#14b8a6'}],
    [{lb:isKo()?'광고그룹 수':'Ad Groups',v:groups.length,c:'#06b6d4'},{lb:isKo()?'전환 그룹':'Converting',v:groups.filter(g=>g.orders>0).length,c:'#22c55e'},{lb:isKo()?'총 노출':'Impressions',v:totImpr.toLocaleString(),c:'#64748b'},{lb:'CVR',v:(totClicks>0?totOrders/totClicks*100:0).toFixed(2)+'%',c:'#10b981'}],
  ]);
  _renderStatChips();
  _renderStatChart(groups.map(g=>g.name.length>16?g.name.slice(0,16)+'…':g.name),groups,isKo()?'📊 광고그룹별 성과':'📊 Ad Group Performance',20);
  const grpHead='<thead><tr><th style="text-align:left">'+(isKo()?'그룹명':'Group')+'</th><th>'+(isKo()?'타입':'Type')+'</th><th>'+(isKo()?'광고비':'Spend')+'</th><th>'+(isKo()?'매출':'Sales')+'</th><th>ROAS</th><th>ACoS</th><th>CPC</th><th>'+(isKo()?'클릭':'Clk')+'</th><th>'+(isKo()?'노출':'Impr')+'</th><th>'+(isKo()?'주문':'Ord')+'</th><th>'+(isKo()?'포함 캠페인':'Campaigns')+'</th></tr></thead>';
  const cpcFmtG=v=>{if(activeCurrency==='KRW')return '₩'+Math.round(v*rate.krw).toLocaleString();if(activeCurrency==='SGD')return 'S$'+(v*(rate.sgd||1.34)).toFixed(2);return '$'+v.toFixed(2);};
  const grpRow=(g,i)=>'<tr><td style="text-align:left;font-weight:600"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:'+COLORS[i%7]+';margin-right:6px"></span>'+g.name+'</td><td><span style="font-size:10px;padding:2px 6px;border-radius:4px;background:var(--card2);color:var(--muted)">'+g.type+'</span></td><td>'+money(g.spend)+'</td><td>'+money(g.sales)+'</td><td class="'+(roasOf(g)>=100?'pos':'neg')+'">'+Math.round(roasOf(g))+'%</td><td>'+(acosOf(g)>0?Math.round(acosOf(g)):'-')+'</td><td>'+cpcFmtG(cpcOf(g))+'</td><td>'+g.clicks.toLocaleString()+'</td><td>'+g.impr.toLocaleString()+'</td><td>'+g.orders+'</td><td style="font-size:10px;color:var(--muted);text-align:left">'+g.campaigns.join(', ')+'</td></tr>';
  document.getElementById('summary-section').innerHTML=
    '<div class="section-title">📦 '+(isKo()?'광고그룹 상세 (제품군 × 타겟팅 방식)':'Ad Group Detail (product × targeting)')+'</div>'+
    '<div class="table-wrap scrollx"><table>'+grpHead+'<tbody>'+groups.map(grpRow).join('')+'</tbody></table></div>';
}

// ──── 키워드 공통 헬퍼 ───────────────────────────────────────────
function _kwCommon(){
  const K=KEYWORD_DATA, rate=avgRate(agg(allData));
  const money=v=>fmtAgg(v,rate.krw,rate.sgd);
  const roasOf=k=>k.spend>0?k.sales/k.spend*100:0;
  const acosOf=k=>k.sales>0?k.spend/k.sales*100:0;
  const cpcOf=k=>k.clicks>0?k.spend/k.clicks:0;
  const ctrOf=k=>(k.impr&&k.impr>0)?k.clicks/k.impr*100:0;
  const cpcFmt=v=>{if(activeCurrency==='KRW')return '₩'+Math.round(v*rate.krw).toLocaleString();if(activeCurrency==='SGD')return 'S$'+(v*(rate.sgd||1.34)).toFixed(2);return '$'+v.toFixed(2);};
  const asinRe=/asin-expanded="([A-Z0-9]+)"/i;
  const kwDisplay=kw=>{const m=kw.match(asinRe);if(m)return '<a href="https://www.amazon.com/dp/'+m[1]+'" target="_blank" style="color:#3b82f6;text-decoration:none;font-size:11px">🔗 '+m[1]+'</a>';if(kw.startsWith('keyword-group='))return '<span style="color:#94a3b8;font-size:10px">'+kw+'</span>';return kw;};
  const isBrand=k=>/jung/i.test(k.kw);
  const brandKws=K.keywords.filter(isBrand);
  const regularKws=K.keywords.filter(k=>!isBrand(k));
  const totSpend=K.keywords.reduce((s,k)=>s+k.spend,0);
  const totSales=K.keywords.reduce((s,k)=>s+k.sales,0);
  const totClicks=K.keywords.reduce((s,k)=>s+k.clicks,0);
  const totImpr=K.keywords.reduce((s,k)=>s+(k.impr||0),0);
  const totOrders=K.keywords.reduce((s,k)=>s+k.orders,0);
  const convKw=K.keywords.filter(k=>k.orders>0).length;
  // 전체 컬럼 헤더
  const fullHead=(extra)=>'<thead><tr><th style="text-align:left">'+(isKo()?'키워드':'Keyword')+'</th>'+
    '<th>'+(isKo()?'광고비':'Spend')+'</th><th>'+(isKo()?'매출':'Sales')+'</th>'+
    '<th>ROAS</th><th>ACoS</th><th>CPC</th><th>CTR</th>'+
    '<th>'+(isKo()?'클릭':'Clk')+'</th><th>'+(isKo()?'노출':'Impr')+'</th>'+
    '<th>'+(isKo()?'주문':'Ord')+'</th>'+(extra||'')+'</tr></thead>';
  const kwCells=k=>'<td>'+money(k.spend)+'</td><td>'+money(k.sales)+'</td>'+
    '<td class="'+(roasOf(k)>=100?'pos':'neg')+'">'+Math.round(roasOf(k))+'%</td>'+
    '<td>'+(acosOf(k)>0?Math.round(acosOf(k)):'-')+'</td>'+
    '<td>'+cpcFmt(cpcOf(k))+'</td>'+
    '<td>'+ctrOf(k).toFixed(2)+'%</td>'+
    '<td>'+(k.clicks||0)+'</td><td>'+((k.impr||0)).toLocaleString()+'</td><td>'+(k.orders||0)+'</td>';
  return {K,rate,money,roasOf,acosOf,cpcOf,ctrOf,cpcFmt,kwDisplay,asinRe,isBrand,brandKws,regularKws,totSpend,totSales,totClicks,totImpr,totOrders,convKw,fullHead,kwCells};
}

// ──── TAB: 키워드 성과 ─────────────────────────────────────────────
function renderKeywordPerf(){
  _adsStatLayout();
  const mw=document.getElementById('mainChart-wrap'); if(mw)mw.style.display='none';
  if(mainCI){mainCI.destroy();mainCI=null;}
  document.getElementById('chart-main-title').textContent='';
  document.getElementById('topbar-badge').textContent=isKo()?'키워드 성과':'Keyword Performance';
  const {K,rate,money,roasOf,acosOf,cpcOf,ctrOf,cpcFmt,kwDisplay,asinRe,brandKws,regularKws,totSpend,totSales,totClicks,totImpr,totOrders,convKw,fullHead,kwCells}=_kwCommon();
  document.getElementById('top-banner').innerHTML='<div style="background:var(--card);border:1px solid var(--border);border-radius:10px;padding:12px 16px;margin-bottom:4px;font-size:12px;color:var(--muted)">'+(isKo()?('🔑 키워드 성과 · '+K.keywords.length+'개 키워드 · 누적 기준'):('🔑 Keyword Performance · '+K.keywords.length+' keywords · cumulative'))+'</div>';
  _renderStatKPI([
    [{lb:isKo()?'총 광고비':'Total Spend',v:money(totSpend),c:'#ef4444'},{lb:isKo()?'총 광고매출':'Ad Sales',v:money(totSales),c:'#22c55e'},{lb:'ROAS',v:Math.round(totSpend>0?totSales/totSpend*100:0)+'%',c:'#3b82f6'},{lb:'ACoS',v:Math.round(totSales>0?totSpend/totSales*100:0),c:'#f97316'}],
    [{lb:'CPC',v:cpcFmt(totClicks>0?totSpend/totClicks:0),c:'#f59e0b'},{lb:'CTR',v:(totImpr>0?totClicks/totImpr*100:0).toFixed(2)+'%',c:'#14b8a6'},{lb:isKo()?'총 주문':'Orders',v:totOrders,c:'#a855f7'},{lb:isKo()?'전환KW':'Conv.KW',v:convKw,c:'#22c55e'}],
  ]);
  _renderStatChips();
  _activeTrendName=null;

  // 브랜드 키워드 행
  const brandRow=k=>'<tr><td style="text-align:left;font-size:11px">'+kwDisplay(k.kw)+'</td>'+kwCells(k)+'</tr>';

  // CPC 액션
  const cpcAction=k=>{const r=roasOf(k);if(r>=200)return '<span style="color:#22c55e;font-weight:700">✅ '+(isKo()?'유지':'Keep')+'</span>';if(r>=130&&k.clicks>10)return '<span style="color:#3b82f6;font-weight:700">⬆️ CPC UP</span>';if(r>=100&&k.clicks<=10)return '<span style="color:#0ea5e9;font-weight:700">⬆️ CPC UP</span><span style="font-size:10px;color:var(--muted)"> (노출↑)</span>';if(r<100&&r>=60)return '<span style="color:#f97316;font-weight:700">⬇️ CPC DOWN</span><span style="font-size:10px;color:var(--muted)"> (ROAS '+Math.round(r)+'%)</span>';return '<span style="color:#ef4444;font-weight:700">⬇️ CPC DOWN</span><span style="font-size:10px;color:var(--muted)"> (전환↓)</span>';};

  // 탑 키워드: 클릭 → 차트, 전체 컬럼 + 액션
  const topBySales=[...regularKws].filter(k=>k.orders>0).sort((a,b)=>b.sales-a.sales).slice(0,10);
  const topRow=k=>{
    const isAsin=asinRe.test(k.kw),isGroup=k.kw.startsWith('keyword-group=');const clickable=!isAsin&&!isGroup;
    return '<tr'+(clickable?' class="kw-row" data-kw="'+k.kw.replace(/"/g,'&quot;')+'" onclick="showKwTrend(\''+k.kw.replace(/\\/g,'\\\\').replace(/'/g,'\\\'')+'\')" style="cursor:pointer"':'')+'>'+
      '<td style="text-align:left;font-size:11px">'+kwDisplay(k.kw)+'</td>'+kwCells(k)+
      '<td style="text-align:right;white-space:nowrap">'+cpcAction(k)+'</td></tr>';
  };

  // 요일별 전체 컬럼
  const dowKo={Sun:'일',Mon:'월',Tue:'화',Wed:'수',Thu:'목',Fri:'금',Sat:'토'};
  const dmap={}; K.dow.forEach(d=>dmap[d.dow]=d);
  const dOrd=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const dowHead='<thead><tr><th>'+(isKo()?'요일':'Day')+'</th>'+
    '<th>'+(isKo()?'광고비':'Spend')+'</th><th>'+(isKo()?'매출':'Sales')+'</th>'+
    '<th>ROAS</th><th>ACoS</th><th>CPC</th><th>CTR</th>'+
    '<th>'+(isKo()?'클릭':'Clk')+'</th><th>'+(isKo()?'노출':'Impr')+'</th>'+
    '<th>'+(isKo()?'주문':'Ord')+'</th></tr></thead>';
  const dowRow=d=>{
    const r=dmap[d]||{spend:0,sales:0,clicks:0,orders:0,impr:0};
    const roas=r.spend>0?r.sales/r.spend*100:0;const acos=r.sales>0?r.spend/r.sales*100:0;
    const cpc=r.clicks>0?r.spend/r.clicks:0;const ctr=(r.impr>0)?r.clicks/r.impr*100:0;
    return '<tr><td><strong>'+(isKo()?dowKo[d]:d)+'</strong></td>'+
      '<td>'+money(r.spend)+'</td><td>'+money(r.sales)+'</td>'+
      '<td class="'+(roas>=100?'pos':'neg')+'">'+Math.round(roas)+'%</td>'+
      '<td>'+(acos>0?Math.round(acos):'-')+'</td>'+
      '<td>'+cpcFmt(cpc)+'</td><td>'+ctr.toFixed(2)+'%</td>'+
      '<td>'+(r.clicks||0)+'</td><td>'+((r.impr||0)).toLocaleString()+'</td><td>'+(r.orders||0)+'</td></tr>';
  };

  // 액션 섹션 전체 컬럼
  const needRaise=regularKws.filter(k=>k.orders>0&&roasOf(k)>=130&&k.clicks<=15).sort((a,b)=>roasOf(b)-roasOf(a)).slice(0,8);
  const needLower=regularKws.filter(k=>k.spend>10&&(k.orders===0||roasOf(k)<80)).sort((a,b)=>b.spend-a.spend).slice(0,8);
  const actionHead=fullHead('<th style="text-align:right">💡</th>');
  const raiseRow=k=>'<tr><td style="text-align:left;font-size:11px">'+kwDisplay(k.kw)+'</td>'+kwCells(k)+'<td style="text-align:right"><span style="color:#3b82f6;font-weight:700">⬆️ CPC UP</span></td></tr>';
  const lowerRow=k=>'<tr><td style="text-align:left;font-size:11px">'+kwDisplay(k.kw)+'</td>'+kwCells(k)+'<td style="text-align:right"><span style="color:#ef4444;font-weight:700">⬇️ CPC DOWN</span></td></tr>';

  document.getElementById('summary-section').innerHTML=
    (brandKws.length?'<div class="section-title">🏷️ '+(isKo()?'브랜드 키워드':'Brand Keywords')+'</div>'+
    '<div class="table-wrap scrollx"><table>'+fullHead()+'<tbody>'+brandKws.sort((a,b)=>b.sales-a.sales).map(brandRow).join('')+'</tbody></table></div>':'')+
    '<div class="section-title">🏆 '+(isKo()?'탑 키워드 (매출순 · 행 클릭→트렌드 · 액션 제안)':'Top Keywords by Sales · click row for trend · CPC Action')+'</div>'+
    '<div class="table-wrap scrollx"><table>'+fullHead('<th style="text-align:right">💡 '+(isKo()?'액션':'Action')+'</th>')+'<tbody>'+topBySales.map(topRow).join('')+'</tbody></table></div>'+
    '<div class="section-title">📅 '+(isKo()?'요일별 광고 성과':'Day-of-Week Performance')+'</div>'+
    '<div class="table-wrap scrollx"><table>'+dowHead+'<tbody>'+dOrd.map(dowRow).join('')+'</tbody></table></div>'+
    (needRaise.length?'<div class="section-title">⬆️ '+(isKo()?'CPC 올려야 할 키워드 (ROAS 양호, 노출 부족)':'Raise CPC — Good ROAS, Low Exposure')+'</div>'+
    '<div class="table-wrap scrollx"><table>'+actionHead+'<tbody>'+needRaise.map(raiseRow).join('')+'</tbody></table></div>':'')+
    (needLower.length?'<div class="section-title">⬇️ '+(isKo()?'CPC 낮춰야 할 키워드 (지출 높음, 효율 저조)':'Lower CPC — High Spend, Low Efficiency')+'</div>'+
    '<div class="table-wrap scrollx"><table>'+actionHead+'<tbody>'+needLower.map(lowerRow).join('')+'</tbody></table></div>':'');
}

// ──── TAB: 전체 키워드 ────────────────────────────────────────────
function renderAllKeywords(){
  _adsStatLayout();
  const mw=document.getElementById('mainChart-wrap'); if(mw){mw.style.display='block';mw.style.height='300px';}
  document.getElementById('topbar-badge').textContent=isKo()?'전체 키워드':'All Keywords';
  const {K,rate,money,roasOf,acosOf,cpcOf,ctrOf,cpcFmt,kwDisplay,asinRe,fullHead,kwCells}=_kwCommon();
  document.getElementById('top-banner').innerHTML='<div style="background:var(--card);border:1px solid var(--border);border-radius:10px;padding:12px 16px;margin-bottom:4px;font-size:12px;color:var(--muted)">'+(isKo()?('📋 전체 키워드 '+K.keywords.length+'개 · 컬럼 클릭 정렬 · 행 클릭 → 트렌드'):('📋 All '+K.keywords.length+' keywords · click column to sort · click row for trend'))+'</div>';
  _renderStatChips();
  _activeTrendName=null;
  // 초기 차트: 메시지 표시
  if(mainCI){mainCI.destroy();mainCI=null;}
  document.getElementById('chart-main-title').textContent=isKo()?'키워드를 클릭하면 트렌드가 표시됩니다':'Click a keyword row to see its trend chart';

  // 정렬
  const colMap={sales:(a,b)=>b.sales-a.sales,spend:(a,b)=>b.spend-a.spend,roas:(a,b)=>roasOf(b)-roasOf(a),acos:(a,b)=>acosOf(b)-acosOf(a),cpc:(a,b)=>cpcOf(b)-cpcOf(a),clicks:(a,b)=>b.clicks-a.clicks,orders:(a,b)=>b.orders-a.orders};
  const sortedAll=[...K.keywords].sort((a,b)=>kwSortDir*(colMap[kwSortCol]||colMap.sales)(a,b));
  const si=col=>kwSortCol===col?(kwSortDir===-1?'▼':'▲'):'';
  const thS=(col,lbl)=>'<th onclick="kwSort(\''+col+'\')" style="cursor:pointer;user-select:none;white-space:nowrap">'+lbl+' <span style="color:var(--accent)">'+si(col)+'</span></th>';
  const allHead='<thead><tr><th style="text-align:left">'+(isKo()?'키워드':'Keyword')+'</th>'+
    thS('spend',isKo()?'광고비':'Spend')+thS('sales',isKo()?'매출':'Sales')+
    '<th>ROAS</th><th>ACoS</th>'+thS('cpc','CPC')+'<th>CTR</th>'+
    thS('clicks',isKo()?'클릭':'Clk')+'<th>'+(isKo()?'노출':'Impr')+'</th>'+
    thS('orders',isKo()?'주문':'Ord')+'</tr></thead>';
  const allRow=k=>{
    const isAsin=asinRe.test(k.kw),isGroup=k.kw.startsWith('keyword-group=');const clickable=!isAsin&&!isGroup;
    return '<tr'+(clickable?' class="kw-row" data-kw="'+k.kw.replace(/"/g,'&quot;')+'" onclick="showKwTrend(\''+k.kw.replace(/\\/g,'\\\\').replace(/'/g,'\\\'')+'\')" style="cursor:pointer"':'')+'>'+
      '<td style="text-align:left;font-size:11px">'+kwDisplay(k.kw)+'</td>'+kwCells(k)+'</tr>';
  };
  document.getElementById('summary-section').innerHTML=
    '<div class="section-title">📋 '+(isKo()?'전체 키워드 (컬럼 클릭 → 정렬 · 행 클릭 → 트렌드)':'All Keywords (sort by column · click row for trend)')+'</div>'+
    '<div class="table-wrap scrollx"><table>'+allHead+'<tbody>'+sortedAll.map(allRow).join('')+'</tbody></table></div>';
}

window.kwSort=function(col){if(kwSortCol===col)kwSortDir*=-1;else{kwSortCol=col;kwSortDir=-1;}if(activeTab==='allkw')renderAllKeywords();else renderKeywordPerf();};

// ──── NEW KEYWORDS TAB ────────────────────────────────────────────
function renderNewKeywords(){
  _adsStatLayout();
  // 차트 및 오버레이 칩 완전 숨김
  const mw=document.getElementById('mainChart-wrap'); if(mw)mw.style.display='none';
  const rg=document.getElementById('ratio-grid'); if(rg)rg.style.display='none';
  if(mainCI){mainCI.destroy();mainCI=null;}
  document.getElementById('chart-main-title').textContent='';
  document.getElementById('topbar-badge').textContent=isKo()?'신규 키워드 후보':'New Keyword Candidates';
  const K=KEYWORD_DATA, rate=avgRate(agg(allData));
  const money=v=>fmtAgg(v,rate.krw,rate.sgd);
  const totSpend=K.newKeywords.reduce((s,k)=>s+k.spend,0);
  const totSales=K.newKeywords.reduce((s,k)=>s+k.sales,0);
  const totOrders=K.newKeywords.reduce((s,k)=>s+k.orders,0);
  const totClicks=K.newKeywords.reduce((s,k)=>s+k.clicks,0);
  const convTerms=K.newKeywords.filter(k=>k.orders>0).length;
  const addKwCount=K.newKeywords.filter(k=>k.orders>=2&&k.spend>0&&k.sales/k.spend>=1).length;
  document.getElementById('top-banner').innerHTML='<div style="background:var(--card);border:1px solid var(--border);border-radius:10px;padding:12px 16px;margin-bottom:4px;font-size:12px;color:var(--muted)">'+(isKo()?'🔍 전환이 발생한 고객 검색어 — 정식 키워드 등록 후보':'🔍 Search terms that converted — candidates for explicit keyword targeting')+'</div>';
  _renderStatKPI([
    [{lb:isKo()?'총 광고비':'Total Spend',v:money(totSpend),c:'#ef4444'},{lb:isKo()?'총 매출':'Sales',v:money(totSales),c:'#22c55e'},{lb:'ROAS',v:Math.round(totSpend>0?totSales/totSpend*100:0)+'%',c:'#3b82f6'},{lb:'ACoS',v:Math.round(totSales>0?totSpend/totSales*100:0),c:'#f97316'}],
    [{lb:isKo()?'총 클릭':'Clicks',v:totClicks.toLocaleString(),c:'#0ea5e9'},{lb:isKo()?'총 주문':'Orders',v:totOrders,c:'#a855f7'},{lb:'CPC',v:money(totClicks>0?totSpend/totClicks:0),c:'#f59e0b'},{lb:'CVR',v:(totClicks>0?totOrders/totClicks*100:0).toFixed(2)+'%',c:'#10b981'}],
    [{lb:isKo()?'검색어 수':'Search Terms',v:K.newKeywords.length,c:'#3b82f6'},{lb:isKo()?'전환 검색어':'Converting',v:convTerms,c:'#22c55e'},{lb:'✅ '+(isKo()?'등록 추천':'Add KW'),v:addKwCount,c:'#22c55e'},{lb:'🔍 '+(isKo()?'모니터링':'Monitor'),v:convTerms-addKwCount,c:'#f59e0b'}],
  ]);
  const nkHead='<thead><tr><th style="text-align:left">'+(isKo()?'고객 검색어':'Search Term')+'</th><th>'+(isKo()?'매출':'Sales')+'</th><th>'+(isKo()?'주문':'Ord')+'</th><th>'+(isKo()?'클릭':'Clk')+'</th><th>'+(isKo()?'광고비':'Spend')+'</th><th>ROAS</th><th>'+(isKo()?'추천':'Action')+'</th></tr></thead>';
  const nkRow=k=>{const roas=k.spend>0?k.sales/k.spend*100:0;
    const action=k.orders>=2&&roas>=100?'✅ '+(isKo()?'키워드 등록':'Add KW'):k.orders>=1&&roas>=50?'🔍 '+(isKo()?'모니터링':'Monitor'):'⏸ '+(isKo()?'대기':'Hold');
    return '<tr><td style="text-align:left;font-size:11px">'+k.term+'</td><td>'+money(k.sales)+'</td><td>'+k.orders+'</td><td>'+k.clicks+'</td><td>'+money(k.spend)+'</td><td class="'+(roas>=100?'pos':'neg')+'">'+Math.round(roas)+'%</td><td style="font-size:11px">'+action+'</td></tr>';
  };
  document.getElementById('summary-section').innerHTML=
    '<div class="section-title">🔍 '+(isKo()?'전체 신규 검색어 (매출 순)':'All New Search Terms (by sales)')+'</div>'+
    '<div class="table-wrap scrollx"><table>'+nkHead+'<tbody>'+[...K.newKeywords].sort((a,b)=>b.sales-a.sales).map(nkRow).join('')+'</tbody></table></div>';
}

// ──── AUTO-START: 페이지 로드 시 바로 대시보드 진입 ──────────────
window.addEventListener('DOMContentLoaded', () => {
  const stored = loadFromStorage();
  allData = stored.length ? mergeData(PRELOADED, stored) : PRELOADED;
  buildByMonth(); showDash();
  // Background sync (silent, skip if same CA day)
  autoSyncOnLoad();
});
