// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract Box {
    uint public val;

    function initval2(uint _val) external {
        val = _val;
    }
}