import './index.scss';
import koni from '../../assets/img/DSC01460.jpg'
import { ActionIcon, Button, Flex } from '@mantine/core';
import { IconStar, IconX } from '@tabler/icons-react';

const BagCard = ({ good }: any) => {
    return (
        <div className='bag-card'>
            <img src={good.image_link || koni} className='bag-card-img' />
            <div className='bag-card-info'>
                <Flex direction={'column'} align={'flex-start'} gap={'10px'} w={'100%'}>
                    <Flex direction={'row'} align={'center'} justify={'space-between'} w={'100%'}>
                        <h1>{good.name}</h1>
                        <ActionIcon
                            variant='transparent'
                        >
                            <IconX stroke={1.2}/>
                        </ActionIcon>
                    </Flex>
                    <Flex direction={'column'} align={'flex-start'} gap={'5px'}>
                        <h2>Размер  в см (ДхШхВ): {good.length.toFixed(1)} х {good.width.toFixed(1)} х {good.height.toFixed(1)}</h2>
                        <h2>{good.color_name}</h2>
                    </Flex>
                </Flex>
                <Flex direction={'column'} align={'flex-start'} gap={'10px'} w={'100%'}>
                    <Flex direction={'row'} align={'center'} justify={'space-between'} w={'100%'}>
                        <h3>{Number(Number(good.price).toFixed(0)).toLocaleString()} ₽</h3>
                        <h2>Кол-во: 1</h2>
                    </Flex>
                    <Button
                        leftSection={<IconStar size={16} stroke={2} />}
                        variant="transparent"
                        size='xs'
                        p={0}
                    >
                        Добавить в избранное
                    </Button>
                </Flex>
            </div>
        </div>
    )
}

export default BagCard;