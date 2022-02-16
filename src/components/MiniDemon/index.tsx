import React from 'react';
import useEnemyMoviment from '../../hooks/useEnemyMoviment';
import { EDirection, HEAD_OFFSET, TILE_SIZE } from '../../settings/constants';

import './index.css'

const MiniDemon = () => {

  const { position, direction } = useEnemyMoviment({ x: 10, y: 5 });

  return (
    <div
      style={{
        position: 'absolute',
        bottom: TILE_SIZE * position.y,
        left: TILE_SIZE * position.x,
        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFFSET,
        backgroundImage: "url(./assets/MINI-DEMON.png)",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
        animation: 'mini-demon-animation 1s steps(4) infinite',
        transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
        zIndex: 1
      }}
    />
  )
}

export default MiniDemon;