import useEventListener from '@use-it/event-listener';
import React from 'react';
import { CanvasContext } from '../../contexts/canvas';
import { ChestsContext } from '../../contexts/chests';
import { EDirection, EWalker } from '../../settings/constants';

function useHeroMoviment(initialPosition) {
  const canvasContext = React.useContext(CanvasContext);
  const chestsContext = React.useContext(ChestsContext);

  const [positionState, updatePositionState] = React.useState(initialPosition);
  const [direction, updateDirectionState] = React.useState(EDirection.RIGHT);

  useEventListener('keydown', (event: { key: any; }) => {
    const direction = event.key as EDirection;

    if (direction.indexOf('Arrow') === -1) {
      return;
    }

    const moviment = canvasContext.updateCanvas(direction, positionState, EWalker.HERO);

    if (moviment.nextMove.valid) {
      updatePositionState(moviment.nextPosition)
      updateDirectionState(direction)
    }

    if (moviment.nextMove.dead) {
      console.log("Você morreu")
    }

    if (moviment.nextMove.chest) {
      chestsContext.updateOpenedChests();
    }
  });

  return {
    position: positionState,
    direction: direction
  }
}

export default useHeroMoviment;