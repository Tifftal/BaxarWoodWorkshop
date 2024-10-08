import { useEffect, useState } from 'react';
import './index.scss';
import { GetAllInBag } from '../../api/bag/bag';
import './index.scss';
import BagCard from '../../entities/bag_card';
import { Button, Flex, Text } from '@mantine/core';
import { IconTrash } from '@tabler/icons-react';

const Bag = () => {
    const [goods, setGoods] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        GetAllInBag()
            .then(res => {
                setGoods(res.data)
                setTotalPrice(goods.reduce((sum, good) => sum + Number(good.price), 0)
                )
            })
            .catch(e => {
                console.error(e)
            })
    }, []);

    return (
        <div className='bag'>
            <div className='bag-content'>
                <Flex direction={'row'} align={'center'} justify={'space-between'} w={'100%'} mb={'10px'}>
                    <Flex direction={'row'} align={'center'} gap={'30px'}>
                        <Text size="xl" fw={500}>Корзина</Text>
                        <Text size="xl" fw={400} c={'brown.8'}>{goods.length} товара</Text>
                    </Flex>
                    <Button
                        leftSection={<IconTrash style={{ width: '80%', height: '80%' }} stroke={1.3} />}
                        variant="transparent"
                        size='sm'
                        p={0}
                        fw={500}
                    >
                        Очистить
                    </Button>
                </Flex>
                {
                    goods.map((item, index) => (
                        <BagCard key={index} good={item} />
                    ))
                }
            </div>
            <div className='bag-pay'>
                <div className='bag-pay-content'>
                    <Text size="xl" fw={500}>Сумма заказа</Text>
                    <Flex direction={'row'} align={'center'} justify={'space-between'} w={'100%'}>
                        <Text>{goods.length} товара</Text>
                        <Text fw={500}>{(totalPrice).toLocaleString()} ₽</Text>
                    </Flex>
                    <Flex direction={'column'} align={'flex-start'} w={'100%'} gap={'5px'}>
                        <Text size='xs' c={'brown.8'}>Без учета возможной стоимости доставки</Text>
                        <Button
                            fullWidth
                        >
                            Перейти к оформлению
                        </Button>
                    </Flex>
                </div>
            </div>
        </div>
    )
}

export default Bag;