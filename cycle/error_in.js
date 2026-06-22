// case: В реальной разработке нам часто нужно знать не только элемент, но и его позицию (например, чтобы вывести "Ошибка в строке №X").

const servers = ['web-server-01', 'db-server-02', 'cache-server-03', 'api-server-04'];
for (let i in servers) {
    console.log(`Server with index ${i} has name is ${servers[i]}`);
}

