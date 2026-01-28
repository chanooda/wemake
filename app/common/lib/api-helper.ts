export const getPages = (count: number, pageSize: number = 1) => {
 return Math.ceil(count / pageSize) || 1;
};

export const getPageRange = (page: number, pageSize: number = 1): [number, number] => {
 return [(page - 1) * pageSize, page * pageSize - 1];
};
